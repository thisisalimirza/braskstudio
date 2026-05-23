import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Rounds",
    description:
      "Clinical reasoning platform used by 40+ medical schools across the US. Built for the workflows real clinicians actually use.",
    url: "https://getrounds.app",
    label: "Healthcare SaaS",
    image: "/portfolio/rounds.jpeg",
  },
  {
    name: "Sitr",
    description:
      "Replaced manual spreadsheets with a real-time seating platform built for high-stakes medical school events at scale.",
    url: "https://usesitr.com",
    label: "Healthcare SaaS",
    image: "/portfolio/sitr.jpeg",
  },
  {
    name: "Medical Innovation Podcast",
    description:
      "Built a brand and web presence that matches the credibility of the guests — physicians, founders, and researchers.",
    url: "https://medicalinnovationpod.com/",
    label: "Media",
    image: "/portfolio/medicalinnovationpodcast.png",
  },
  {
    name: "MD+",
    description:
      "Built a scalable identity and platform for a 5,000-member community of medical student and physician-innovators.",
    url: "https://mdplus-nine.vercel.app/",
    label: "Healthcare Community",
    image: "/portfolio/mdplus.png",
  },
  {
    name: "Byline",
    description:
      "Clean publishing platform for writers who want to own their audience — no algorithm, no middleman.",
    url: "https://bylineblogs.com/",
    label: "SaaS",
    image: "/portfolio/byline.jpeg",
  },
  {
    name: "Supertasks",
    description:
      "Task management stripped to its core. Built for founders who need focus, not another feature list.",
    url: "https://supertasks-app.vercel.app/",
    label: "Productivity",
    image: "/portfolio/Supertasks.png",
  },
];

const steps = [
  {
    week: "Week 1",
    description: "You send content. I build the core architecture and design.",
  },
  {
    week: "Week 2",
    description: "We refine, test, and launch. Guaranteed.",
  },
  {
    week: "Ongoing",
    description: "Optional retainer for edits and updates.",
  },
];

type ProjectCardProps = {
  project: (typeof projects)[number];
  className?: string;
};

function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden group ${className}`}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm font-semibold mb-0.5">{project.name}</p>
        <p className="text-white/60 text-xs">{project.label}</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="bg-[#0c0c0c] text-[#e2e2e2] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-sm border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 h-11 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-tight text-[#e2e2e2]">
            Brask Studio
          </span>
          <div className="hidden sm:flex items-center gap-7">
            {[
              { label: "home", href: "#" },
              { label: "work", href: "#work" },
              { label: "process", href: "#process" },
              { label: "about", href: "#about" },
              { label: "contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] text-[#555] hover:text-[#e2e2e2] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 sm:pt-56 sm:pb-36 px-6 max-w-[1400px] mx-auto">
        <p className="text-[11px] text-[#555] uppercase tracking-[0.18em] mb-8">
          Brask Studio.
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-[#e2e2e2]">
          Websites that make you look as good as you actually are.
        </h1>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#555] max-w-xl leading-relaxed font-light">
          We build clean, fast marketing sites for healthcare practices,
          professional services firms, and early-stage companies. Two weeks,
          flat rate.
        </p>
        <a
          href="#contact"
          className="mt-10 sm:mt-12 inline-flex items-center gap-2 text-[11px] text-[#666] hover:text-[#e2e2e2] transition-colors tracking-[0.12em] uppercase"
        >
          Start a project <ArrowRight className="w-3 h-3" />
        </a>
      </section>

      {/* Work — Mosaic Grid */}
      <section id="work" className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-6">
          <p className="text-[11px] text-[#555] uppercase tracking-[0.18em]">
            work
          </p>
        </div>
        {/* Grid: 1 col mobile → 3 col desktop, mosaic layout */}
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
            {/* Rounds — wide (col 1–2) */}
            <ProjectCard
              project={projects[0]}
              className="sm:col-span-2 aspect-video sm:aspect-[16/7]"
            />
            {/* Sitr — tall (col 3, row 1–2) */}
            <ProjectCard
              project={projects[1]}
              className="aspect-video sm:row-span-2 sm:aspect-auto"
            />
            {/* Medical Innovation Podcast */}
            <ProjectCard
              project={projects[2]}
              className="aspect-video sm:aspect-[4/3]"
            />
            {/* MD+ */}
            <ProjectCard
              project={projects[3]}
              className="aspect-video sm:aspect-[4/3]"
            />
            {/* Byline — wide (col 1–2) */}
            <ProjectCard
              project={projects[4]}
              className="sm:col-span-2 aspect-video sm:aspect-[16/7]"
            />
            {/* Supertasks */}
            <ProjectCard
              project={projects[5]}
              className="aspect-video sm:aspect-[4/3]"
            />
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 pb-10" />
      </section>

      {/* How It Works */}
      <section
        id="process"
        className="py-20 sm:py-28 px-6 border-t border-white/[0.06]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#555] uppercase tracking-[0.18em] mb-12">
            how it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-10">
            {steps.map((step, i) => (
              <div key={step.week}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-[#e2e2e2] text-[10px] flex items-center justify-center font-semibold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#e2e2e2] tracking-wide">
                    {step.week}
                  </span>
                </div>
                <p className="text-[#666] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#444] border-t border-white/[0.06] pt-6 leading-relaxed max-w-2xl">
            No hidden fees. No endless email chains. A clear scope from day one
            and a launch date you can count on.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 sm:py-28 px-6 border-t border-white/[0.06]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#555] uppercase tracking-[0.18em] mb-12">
            pricing
          </p>
          <div className="max-w-xl">
            <p className="text-2xl sm:text-3xl font-bold tracking-tight mb-5 text-[#e2e2e2]">
              Projects start at $3,500.
            </p>
            <p className="text-[#666] leading-relaxed text-base sm:text-lg font-light">
              Retainers from $400/month. Rush delivery available. No complicated
              tier tables — just a flat rate, clear scope, and a two-week
              timeline from kickoff to launch.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 sm:py-28 px-6 border-t border-white/[0.06]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#555] uppercase tracking-[0.18em] mb-6">
            about
          </p>
          <p className="text-xl sm:text-2xl font-bold tracking-tight mb-10 text-[#e2e2e2]">
            Domain expertise matters.
          </p>
          <div className="max-w-2xl">
            <p className="text-[#666] leading-relaxed text-base sm:text-lg font-light">
              I&apos;m Ali — MS3 at UConn, founder, and software engineer.
              I&apos;ve been building on the web for years and I care way too
              much about things loading fast and looking right. I work with a
              small number of clients at a time so I can actually focus on what
              I&apos;m building. The medical school angle isn&apos;t incidental
              — it means I actually understand what healthcare companies are
              trying to say.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 sm:py-28 px-6 border-t border-white/[0.06]"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-24">
            {/* Left */}
            <div>
              <p className="text-[11px] text-[#555] uppercase tracking-[0.18em] mb-6">
                contact
              </p>
              <p className="text-xl sm:text-2xl font-bold tracking-tight mb-6 text-[#e2e2e2] leading-snug">
                If you&apos;re a founder with a story worth telling, we&apos;d
                like to hear from you.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                Or email directly:
                <br />
                <a
                  href="mailto:hello@braskstudio.com"
                  className="text-[#666] hover:text-[#e2e2e2] transition-colors"
                >
                  hello@braskstudio.com
                </a>
                <br />
                <br />
                Response within 24 hours.
              </p>
            </div>
            {/* Right — form */}
            <div>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-0"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="your name"
                  className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-white/[0.1] text-[#e2e2e2] placeholder-[#3a3a3a] focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email address"
                  className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-white/[0.1] text-[#e2e2e2] placeholder-[#3a3a3a] focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-white/[0.1] text-[#e2e2e2] placeholder-[#3a3a3a] focus:outline-none focus:border-white/30 transition-colors"
                />
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="your idea, timeline, and anything else we should know."
                  className="w-full px-0 py-4 text-sm bg-transparent border-0 border-b border-white/[0.1] text-[#e2e2e2] placeholder-[#3a3a3a] focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
                <div className="pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#0c0c0c] bg-[#e2e2e2] hover:bg-white transition-colors tracking-wide rounded-sm cursor-pointer"
                  >
                    submit →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-xs text-[#3a3a3a]">
            © {new Date().getFullYear()} Brask Studio
          </span>
          <div className="hidden sm:flex items-center gap-6">
            {["home", "work", "process", "about", "contact"].map((link) => (
              <a
                key={link}
                href={link === "home" ? "#" : `#${link}`}
                className="text-[11px] text-[#3a3a3a] hover:text-[#888] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
