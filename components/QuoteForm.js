"use client";

import { useState } from "react";
import { getActiveMachines, getMachine } from "../data/machines";
import { site } from "../data/site";

export default function QuoteForm({ preselectedSlug = "" }) {
  const machines = getActiveMachines();
  const preselectedMachine = preselectedSlug ? getMachine(preselectedSlug) : null;
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.target;
    const data = new FormData(form);

    // Web3Forms — replace ACCESS_KEY with your key from https://web3forms.com
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    data.append("subject", `Quote request — ${data.get("machine") || "General"}`);
    data.append("from_name", site.name);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try WhatsApp or phone.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please contact us on WhatsApp or phone.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-soft sm:p-10">
        <p className="text-lg font-semibold text-forest">Thank you.</p>
        <p className="mt-3 text-ink/65">
          We received your request and will respond shortly. For faster response, message us
          on WhatsApp.
        </p>
        <a
          href={`https://wa.me/${site.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-6 inline-flex rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white"
        >
          Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Name <span className="text-leaf">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            WhatsApp / Phone <span className="text-leaf">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
            placeholder="+91 …"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
            placeholder="you@example.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="machine" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Machine of Interest
          </label>
          <select
            id="machine"
            name="machine"
            defaultValue={preselectedMachine?.name || ""}
            className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
          >
            <option value="">Select a machine (optional)</option>
            {machines.map((m) => (
              <option key={m.slug} value={m.name}>
                {m.name}
              </option>
            ))}
            <option value="Not sure — need recommendation">Not sure — need recommendation</option>
          </select>
        </div>

        <div>
          <label htmlFor="tractor_hp" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Tractor HP (if applicable)
          </label>
          <input
            id="tractor_hp"
            name="tractor_hp"
            className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
            placeholder="e.g. 55 HP"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Location
          </label>
          <input
            id="location"
            name="location"
            className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
            placeholder="District / State"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="requirement" className="block text-xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Application / Requirement <span className="text-leaf">*</span>
          </label>
          <textarea
            id="requirement"
            name="requirement"
            required
            rows={4}
            className="focus-ring mt-2 w-full resize-y rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
            placeholder="e.g. Banana wet waste shredding, approx. volume, preferred capacity…"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-6 w-full rounded-full bg-forest py-3.5 text-sm font-semibold text-white transition hover:bg-leaf disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit Quote Request"}
      </button>

      <p className="mt-4 text-center text-xs text-ink/45">
        Prefer a direct line?{" "}
        <a href={`tel:+${site.contact.phoneRaw}`} className="font-medium text-forest underline-offset-2 hover:underline">
          Call
        </a>{" "}
        or{" "}
        <a
          href={`https://wa.me/${site.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-forest underline-offset-2 hover:underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  );
}
