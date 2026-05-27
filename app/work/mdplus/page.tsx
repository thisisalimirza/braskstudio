import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "MD+ — Case Study | Brask Studio",
  description:
    "How Brask Studio rebuilt the digital identity of a 5,000-member community of physician-innovators — and unlocked partnerships with Anthropic, Google, and a16z.",
};

const NAVY = "#0F1B2D";

const outcomes = [
  { label: "Community size", value: "5,000+" },
  { label: "Delivery", value: "2 weeks" },
  { label: "Partners secured", value: "Anthropic, Google, Abridge, a16z" },
];

const pillars = [
  {
    number: "01",
    title: "Train",
    description:
      "Equip members with new skills at the intersection of medicine and technology — workshops, courses, and hands-on programming.",
  },
  {
    number: "02",
    title: "Build Community",
    description:
      "Social events, cohorts, and a living network that makes members feel they belong to something larger than themselves.",
  },
  {
    number: "03",
    title: "Legitimize",
    description:
      "Formal institutional programs — the Catalyst program and Datathon — that give members real credentials and real weight.",
  },
];

const deliverables = [
  "Brand kit: colors, typography, logo system",
  "Complete website redesign from scratch",
  "Login system and member authentication",
  "Content management system for blog publishing",
  "Spotify podcast integration",
  "Newsletter integration",
  "Centralized public-facing presence",
  "Admin infrastructure for back-end management",
];

export default function MDPlusCaseStudy() {
  return (
    <div className="bg-[#fafaf9] text-[#111110] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-[#e7e5e4]">
        <div className="max-w-[1400px] mx-auto px-6 h-11 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] text-[#6b7280] hover:text-[#111110] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Brask Studio
          </Link>
          <Link
            href="/#contact"
            style={{ backgroundColor: NAVY }}
            className="text-white text-[11px] font-medium px-4 py-1.5 rounded-sm hover:opacity-85 transition-opacity"
          >
            Start a project
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-40 sm:pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
              Case Study
            </span>
            <span className="text-[#e7e5e4]">/</span>
            <span className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
              Healthcare Community
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_380px] gap-10 sm:gap-20 items-end">
            <div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.02] text-[#111110] mb-6">
                MD+
              </h1>
              <p className="text-lg sm:text-2xl text-[#374151] font-light leading-relaxed max-w-xl">
                A 5,000-member community of physician-innovators had outgrown
                their website. We rebuilt everything — identity, infrastructure,
                and positioning — in two weeks.
              </p>
            </div>

            {/* Outcomes bar */}
            <div className="divide-y divide-[#e7e5e4] border-t border-b border-[#e7e5e4] sm:border sm:rounded-lg sm:divide-none sm:border-[#e7e5e4]">
              {outcomes.map(({ label, value }) => (
                <div key={label} className="py-4 sm:px-5 sm:py-4">
                  <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.15em] mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-[#111110]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-24">
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
                The Problem
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110] leading-snug mb-8">
                The website was the only thing holding them back.
              </p>
              <div className="space-y-5 text-[#374151] leading-relaxed text-base sm:text-lg font-light">
                <p>
                  MD+ started as a student-led community and became something
                  rare: the only place where physicians, med students, and
                  residents who are also interested in technology, consulting,
                  VC, policy, AI, and data could actually find each other.
                  Because it was the only community of its kind, it grew fast —
                  past 5,000 members.
                </p>
                <p>
                  During that growth, leadership was focused on exactly what
                  they should have been focused on: building the community,
                  managing the organization, and responding to demand. The
                  website was an afterthought — an early Squarespace site built
                  quickly and scrappily in the beginning, just functional enough
                  to host a Google form and a Slack link.
                </p>
                <p>
                  That was fine when they were a scrappy student org. It
                  wasn&apos;t fine when they were a 5,000-member organization
                  trying to secure institutional partnerships. The website
                  wasn&apos;t just outdated. It was actively costing them
                  credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-24">
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
                The Approach
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110] leading-snug mb-8">
                The hardest part isn&apos;t designing the website.
                It&apos;s figuring out what the website is actually saying.
              </p>
              <div className="space-y-5 text-[#374151] leading-relaxed text-base sm:text-lg font-light">
                <p>
                  Ali started with a brand kit — colors, logo variations, font
                  choices — to establish MD+&apos;s visual identity from the
                  ground up. But that was the easy part.
                </p>
                <p>
                  Brask Studio has learned, through doing this work, that
                  unlocking real growth for a client requires something harder
                  than design execution. It requires deeply understanding what
                  their organization actually is, exactly what they do, who they
                  do it for, and why that person should care. That synthesis has
                  to come before any pixel is placed.
                </p>
                <p>
                  The inspiration here was closer to Rick Rubin than to a design
                  framework — not about adding, but about reducing. Stripping an
                  organization back to its essential elements until what remains
                  is true.
                </p>
                <p>
                  For MD+, that reduction produced three things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-10">
            The Framework
          </p>
          <p className="text-base text-[#6b7280] max-w-xl mb-12 leading-relaxed font-light">
            This became the navigation bar. Once the structure was right, everything else followed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e7e5e4] border border-[#e7e5e4] rounded-lg overflow-hidden">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="bg-[#fafaf9] p-7 sm:p-8">
                <span className="text-[11px] text-[#9ca3af] font-mono tracking-wider">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-[#111110] mt-3 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-10">
            Before & After
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <div className="relative w-full rounded-lg overflow-hidden border border-[#e7e5e4] bg-[#f3f2f1]">
                <Image
                  src="/case-studies/mdplus/before.png"
                  alt="MD+ website before redesign"
                  width={700}
                  height={394}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-[11px] text-[#9ca3af] mt-3 tracking-wide">
                Before — Squarespace site built at founding
              </p>
            </div>
            <div>
              <div className="relative w-full rounded-lg overflow-hidden border border-[#e7e5e4] bg-[#f3f2f1]">
                <Image
                  src="/case-studies/mdplus/after.png"
                  alt="MD+ website after redesign"
                  width={700}
                  height={394}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[11px] text-[#9ca3af] mt-3 tracking-wide">
                After — rebuilt in two weeks by Brask Studio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Was Built */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-24">
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
                What Was Built
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110] leading-snug mb-8 max-w-lg">
                Every part of their business, centralized in one place.
              </p>
              <p className="text-[#374151] leading-relaxed text-base font-light mb-10 max-w-xl">
                Within two weeks, the site was fully live — not just visually
                redesigned, but completely rebuilt with real infrastructure
                behind it.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: NAVY }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-24">
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
                The Result
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110] leading-snug mb-8">
                Shortly after launch, the partnerships followed.
              </p>
              <p className="text-[#374151] leading-relaxed text-base sm:text-lg font-light mb-10">
                The new website gave MD+ the institutional credibility their
                community had always deserved. With a platform that reflected
                the scale and seriousness of the organization, they were able to
                secure partnerships with some of the most significant companies
                in the world — quickly, and with more still coming.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Anthropic", "Google", "Abridge", "Andreessen Horowitz"].map(
                  (partner) => (
                    <span
                      key={partner}
                      className="text-xs font-semibold px-4 py-2 border border-[#e7e5e4] rounded-full text-[#374151] bg-white"
                    >
                      {partner}
                    </span>
                  )
                )}
                <span className="text-xs font-semibold px-4 py-2 border border-[#e7e5e4] rounded-full text-[#9ca3af] bg-white">
                  + more counting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e7e5e4] py-14 sm:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-5">
                Next
              </p>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110] leading-snug max-w-md">
                Your website should match what you&apos;ve actually built.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/#work"
                className="text-xs text-[#6b7280] hover:text-[#111110] transition-colors"
              >
                ← All work
              </Link>
              <Link
                href="/#contact"
                style={{ backgroundColor: NAVY }}
                className="inline-flex items-center gap-2.5 text-white text-xs font-medium px-5 py-2.5 rounded-sm transition-opacity hover:opacity-85"
              >
                Start a project <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-xs text-[#9ca3af]">
            © {new Date().getFullYear()} Brask Studio
          </span>
          <Link
            href="/"
            className="text-[11px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
          >
            braskstudio.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
