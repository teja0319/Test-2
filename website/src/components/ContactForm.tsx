"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { serviceOptions } from "@/content/site";
import { ArrowRightIcon, CheckIcon } from "./Icons";

const initial: ContactState = { status: "idle" };

const inputCls =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-teal focus:ring-4 focus:ring-teal/15 aria-[invalid=true]:border-red-400";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-xl">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-mint text-green-600">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">Message received</h3>
        <p className="mt-3 text-muted" role="status">
          {state.message}
        </p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={action} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-900">
          Full name *
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!err.name}
            className={inputCls}
          />
          {err.name && <span className="mt-1 block text-xs text-red-600">{err.name}</span>}
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Email *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!err.email}
            className={inputCls}
          />
          {err.email && <span className="mt-1 block text-xs text-red-600">{err.email}</span>}
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={inputCls} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Business name
          <input
            name="business"
            autoComplete="organization"
            placeholder="Company / brand"
            className={inputCls}
          />
        </label>
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          I&apos;m interested in
          <select name="service" defaultValue="" aria-invalid={!!err.service} className={inputCls}>
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {err.service && <span className="mt-1 block text-xs text-red-600">{err.service}</span>}
        </label>
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          How can we help? *
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your business and goals"
            aria-invalid={!!err.message}
            className={inputCls}
          />
          {err.message && <span className="mt-1 block text-xs text-red-600">{err.message}</span>}
        </label>
        {/* Honeypot for bots */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
      </div>

      {state.status === "error" && state.message && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-semibold text-white transition hover:bg-navy-700 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get my free consultation"}
        {!pending && <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />}
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        We reply within one business day. Your details stay private.
      </p>
    </form>
  );
}
