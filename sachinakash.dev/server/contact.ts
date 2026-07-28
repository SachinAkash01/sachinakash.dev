import { Resend } from "resend";

const inquiryTypes = new Set([
  "Job Opportunity",
  "Website Project",
  "Web Application",
  "Mobile Application",
  "Software Consultation",
  "Partnership",
  "Other",
]);

type ContactEnvironment = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

type ContactRequest = {
  method: string;
  contentType?: string;
  body: string;
  env: ContactEnvironment;
};

type ContactResponse = {
  status: number;
  body: { ok: boolean; message?: string };
  headers?: Record<string, string>;
};

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
  website: string;
};

const MAX_REQUEST_SIZE = 12_000;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: string): ContactPayload | null {
  let input: unknown;

  try {
    input = JSON.parse(body);
  } catch {
    return null;
  }

  if (!input || typeof input !== "object" || Array.isArray(input)) return null;

  const record = input as Record<string, unknown>;
  return {
    name: asString(record.name),
    email: asString(record.email).toLowerCase(),
    company: asString(record.company),
    inquiryType: asString(record.inquiryType),
    message: asString(record.message),
    website: asString(record.website),
  };
}

function isValid(payload: ContactPayload) {
  return (
    payload.name.length >= 2 &&
    payload.name.length <= 100 &&
    payload.email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) &&
    payload.company.length <= 120 &&
    inquiryTypes.has(payload.inquiryType) &&
    payload.message.length >= 20 &&
    payload.message.length <= 5_000
  );
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function createEmailHtml(payload: ContactPayload) {
  const company = payload.company
    ? `<tr><td style="padding:8px 16px 8px 0;color:#737373">Company</td><td style="padding:8px 0">${escapeHtml(payload.company)}</td></tr>`
    : "";

  return `
    <div style="background:#f5f5f4;padding:32px;font-family:Arial,sans-serif;color:#1c1917">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e7e5e4;padding:32px">
        <p style="margin:0 0 8px;color:#b7791f;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">New portfolio inquiry</p>
        <h1 style="margin:0 0 24px;font-size:24px">${escapeHtml(payload.inquiryType)}</h1>
        <table style="width:100%;border-collapse:collapse;font-size:15px">
          <tr><td style="padding:8px 16px 8px 0;color:#737373">Name</td><td style="padding:8px 0">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#737373">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
          ${company}
        </table>
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e7e5e4">
          <p style="margin:0 0 10px;color:#737373;font-size:13px">Message</p>
          <p style="margin:0;white-space:pre-wrap;line-height:1.65">${escapeHtml(payload.message)}</p>
        </div>
      </div>
    </div>`;
}

function createEmailText(payload: ContactPayload) {
  return [
    "New portfolio inquiry",
    "",
    `Inquiry type: ${payload.inquiryType}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : "",
    "",
    "Message:",
    payload.message,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export async function handleContactRequest(
  request: ContactRequest,
): Promise<ContactResponse> {
  if (request.method !== "POST") {
    return {
      status: 405,
      headers: { Allow: "POST" },
      body: { ok: false, message: "Method not allowed." },
    };
  }

  if (!request.contentType?.toLowerCase().includes("application/json")) {
    return {
      status: 415,
      body: { ok: false, message: "Content-Type must be application/json." },
    };
  }

  if (request.body.length > MAX_REQUEST_SIZE) {
    return {
      status: 413,
      body: { ok: false, message: "Request is too large." },
    };
  }

  const payload = parsePayload(request.body);
  if (!payload) {
    return {
      status: 400,
      body: { ok: false, message: "Invalid request body." },
    };
  }

  // Silently accept honeypot submissions so bots do not learn how they failed.
  if (payload.website) return { status: 200, body: { ok: true } };

  if (!isValid(payload)) {
    return {
      status: 422,
      body: { ok: false, message: "Please check the submitted fields." },
    };
  }

  const apiKey = request.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact delivery is missing RESEND_API_KEY.");
    return {
      status: 503,
      body: { ok: false, message: "Email delivery is not configured." },
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      request.env.CONTACT_FROM_EMAIL ??
      "Sachin Akash Portfolio <contact@sachinakash.dev>",
    to: [request.env.CONTACT_TO_EMAIL ?? "hello@sachinakash.dev"],
    replyTo: payload.email,
    subject: `[Portfolio] ${payload.inquiryType} from ${payload.name}`,
    html: createEmailHtml(payload),
    text: createEmailText(payload),
    tags: [
      { name: "source", value: "portfolio-contact" },
      {
        name: "inquiry_type",
        value: payload.inquiryType.toLowerCase().replace(/[^a-z0-9_-]+/g, "-"),
      },
    ],
  });

  if (error) {
    console.error("Resend contact delivery failed:", error.message);
    return {
      status: 502,
      body: { ok: false, message: "The message could not be delivered." },
    };
  }

  return { status: 200, body: { ok: true } };
}

