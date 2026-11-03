"use server";

import { serviceOptions } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message" | "service", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max = 2000) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Handles the contact form.
 *
 * Delivery: if CONTACT_WEBHOOK_URL is set (Slack, Zapier, Make, n8n, Formspree,
 * Google Apps Script, etc.), the enquiry is POSTed there as JSON. Without it,
 * the enquiry is only written to the server log.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field.
  if (field(formData, "company_website")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const data = {
    name: field(formData, "name", 120),
    email: field(formData, "email", 200),
    phone: field(formData, "phone", 40),
    business: field(formData, "business", 160),
    service: field(formData, "service", 80),
    message: field(formData, "message", 4000),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.service && !serviceOptions.includes(data.service)) errors.service = "Please choose a service.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (10+ characters).";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const payload = { ...data, source: "megnetora-website", receivedAt: new Date().toISOString() };
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else {
      console.info("[contact] New enquiry (set CONTACT_WEBHOOK_URL to forward it):", payload);
    }
  } catch (err) {
    console.error("[contact] Failed to deliver enquiry", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email us directly.",
    };
  }

  return {
    status: "success",
    message: `Thanks ${data.name.split(" ")[0]}! We'll get back to you within one business day.`,
  };
}
