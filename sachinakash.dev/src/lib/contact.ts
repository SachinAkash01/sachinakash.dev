export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
  website: string;
};

export async function submitContactForm(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok)
    throw new Error(
      "The message could not be delivered. Please try again or use email.",
    );
}
