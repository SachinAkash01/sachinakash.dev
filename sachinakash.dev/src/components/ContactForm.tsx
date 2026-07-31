import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { submitContactForm, type ContactPayload } from "../lib/contact";

const inquiryTypes = [
  "Job Opportunity",
  "Website Project",
  "Web Application",
  "Mobile Application",
  "Software Consultation",
  "Partnership",
  "Other",
];
const initial: ContactPayload = {
  name: "",
  email: "",
  company: "",
  inquiryType: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});

  const validate = () => {
    const next: typeof errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.inquiryType)
      next.inquiryType = "Please select an inquiry type.";
    if (values.message.trim().length < 20)
      next.message =
        "Please share at least 20 characters so I can understand the context.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    if (values.website) {
      setStatus("success");
      return;
    }
    setStatus("loading");
    try {
      await submitContactForm(values);
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  };

  const set = (key: keyof ContactPayload, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  };
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          Name{" "}
          <input
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <small>{errors.email}</small>}
        </label>
        <label>
          Company / Organisation{" "}
          <input
            placeholder="Company or Organisation name (optional)"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
          />
        </label>
        <label>
          Inquiry type{" "}
          <select
            value={values.inquiryType}
            onChange={(e) => set("inquiryType", e.target.value)}
            aria-invalid={Boolean(errors.inquiryType)}
          >
            <option value="">Select one</option>
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          {errors.inquiryType && <small>{errors.inquiryType}</small>}
        </label>
      </div>
      <label className="honeypot" aria-hidden="true">
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </label>
      <label>
        Message{" "}
        <textarea
          rows={5}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          placeholder="Tell me about the role, problem, or product you have in mind."
        />
        {errors.message && <small>{errors.message}</small>}
      </label>
      <div className="contact-form__end">
        <p role="status">
          {status === "success" &&
            "Message sent. Thank you — I’ll get back to you soon."}
          {status === "error" &&
            "Delivery failed. Please try again or use the direct email option."}
        </p>
        <button className="button" disabled={status === "loading"}>
          {status === "loading" ? (
            <LoaderCircle className="spin" size={18} />
          ) : (
            <ArrowRight size={18} />
          )}{" "}
          Send inquiry
        </button>
      </div>
    </form>
  );
}
