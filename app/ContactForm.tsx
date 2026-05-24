"use client";

import { useState } from "react";

const NAVY = "#0F1B2D";
const ENDPOINT = "https://formspree.io/f/mojbnepl";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="py-8">
        <p className="text-xl font-bold tracking-tight text-[#111110]">Got it — we&apos;ll be in touch.</p>
        <p className="text-sm text-[#6b7280] mt-2">Expect a reply within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      <input
        type="text"
        name="name"
        required
        placeholder="your name"
        className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-[#e7e5e4] text-[#111110] placeholder-[#9ca3af] focus:outline-none focus:border-[#0F1B2D] transition-colors"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="email address"
        className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-[#e7e5e4] text-[#111110] placeholder-[#9ca3af] focus:outline-none focus:border-[#0F1B2D] transition-colors"
      />
      <input
        type="text"
        name="company"
        placeholder="company"
        className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-[#e7e5e4] text-[#111110] placeholder-[#9ca3af] focus:outline-none focus:border-[#0F1B2D] transition-colors"
      />
      <textarea
        name="message"
        required
        rows={3}
        placeholder="your idea, timeline, and anything else we should know."
        className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-[#e7e5e4] text-[#111110] placeholder-[#9ca3af] focus:outline-none focus:border-[#0F1B2D] transition-colors resize-none"
      />
      <div className="pt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          style={{ backgroundColor: NAVY }}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white hover:opacity-85 transition-opacity tracking-wide rounded-sm cursor-pointer disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "submit →"}
        </button>
        {status === "error" && (
          <p className="text-[11px] text-red-500 mt-3">Something went wrong — try again or email us directly.</p>
        )}
      </div>
    </form>
  );
}
