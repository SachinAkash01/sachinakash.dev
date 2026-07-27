export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
  website: string;
};

export class ContactEndpointMissingError extends Error {}

export async function submitContactForm(payload: ContactPayload) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as
    | string
    | undefined;
  if (!endpoint)
    throw new ContactEndpointMissingError(
      "Contact delivery is not configured yet.",
    );

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok)
    throw new Error(
      "The message could not be delivered. Please try again or use email.",
    );
}
