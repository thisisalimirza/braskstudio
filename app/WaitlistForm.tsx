"use client";

import { useState } from "react";

const NAVY = "#0F1B2D";
const ENDPOINT = "https://formspree.io/f/mojbnepl";

export default function WaitlistForm() {
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
      <div className="max-w-md mx-auto py-4 text-center">
        <p className="text-sm font-medium text-[#111110]">You&apos;re on the list.</p>
        <p className="text-[11px] text-[#9ca3af] mt-1">We&apos;ll reach out personally when we&apos;re ready for you.</p>
      </div>
    );
  }

  return (
    <>
      <form
        id="waitlist"
        onSubmit={handleSubmit}
        className="flex items-stretch border border-[#e7e5e4] max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-4 py-3 text-sm bg-white text-[#111110] placeholder-[#9ca3af] focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          style={{ backgroundColor: NAVY }}
          className="flex-shrink-0 px-5 py-3 text-[11px] font-medium text-white hover:opacity-85 transition-opacity tracking-wide whitespace-nowrap cursor-pointer disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Get Early Access"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-[11px] text-red-500 mt-2">Something went wrong — try again or email us directly.</p>
      )}
    </>
  );
}
