import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

const projects = [
  {
    name: "Rounds",
    description: "Production-grade clinical reasoning platform deployed at 40+ medical schools. Built to handle real patient data at scale.",
    url: "https://getrounds.app",
    label: "Healthcare SaaS",
    image: "/portfolio/rounds.jpeg",
  },
  {
    name: "Sitr",
    description: "High-capacity seating and event management platform built for medical institutions running 500+ person events.",
    url: "https://usesitr.com",
    label: "Healthcare SaaS",
    image: "/portfolio/sitr.jpeg",
  },
  {
    name: "Medical Innovation Podcast",
    description: "Brand identity and full web presence for one of healthcare's leading innovation podcasts.",
    url: "https://medicalinnovationpod.com/",
    label: "Media",
    image: "/portfolio/medicalinnovationpodcast.png",
  },
  {
    name: "MD+",
    description: "Full redesign for a nonprofit serving 5,000+ medical students and physician-innovators across the US.",
    url: "https://mdplus-nine.vercel.app/",
    label: "Healthcare Community",
    image: "/portfolio/mdplus.png",
  },
  {
    name: "Byline",
    description: "Clean publishing platform for writers who want to own their audience and skip the algorithm.",
    url: "https://bylineblogs.com/",
    label: "SaaS",
    image: "/portfolio/byline.jpeg",
  },
  {
    name: "Supertasks",
    description: "Minimal task management app built around deep focus — no bloat, no noise.",
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

const NAVY = "#0F1B2D";

export default function Home() {
  return (
    <div className="bg-[#fafaf9] text-[#111110]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-[#111110]">Brask Studio</span>
          <a
            href="#contact"
            style={{ color: NAVY }}
            className="text-sm font-semibold transition-opacity hover:opacity-70"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-56 pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            Websites that make you look as good as you actually are.
          </h1>
          <p className="mt-8 text-xl text-[#6b7280] max-w-xl leading-relaxed font-light">
            We build clean, fast marketing sites for healthcare practices,
            professional services firms, and early-stage companies. Two weeks,
            flat rate.
          </p>
          <a
            href="#contact"
            style={{ backgroundColor: NAVY }}
            className="mt-10 inline-flex items-center gap-2.5 text-white text-sm font-medium px-6 py-3 rounded-lg transition-opacity hover:opacity-85"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9ca3af] mb-12">
            Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-[#e7e5e4] hover:border-[#cbd5e1] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="relative h-52 bg-[#f3f4f6] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#111110]">{project.name}</span>
                    <span className="text-xs text-[#6b7280] bg-[#f3f4f6] px-2.5 py-1 rounded-full font-medium">
                      {project.label}
                    </span>
                  </div>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9ca3af] mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            {steps.map((step, i) => (
              <div key={step.week}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-semibold flex-shrink-0"
                    style={{ backgroundColor: NAVY }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: NAVY }}>
                    {step.week}
                  </span>
                </div>
                <p className="text-[#374151] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6b7280] border-t border-[#e7e5e4] pt-6">
            No hidden fees. No endless email chains. A clear scope from day one and a launch date you can count on.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9ca3af] mb-12">
            Pricing
          </h2>
          <div className="max-w-xl">
            <p className="text-2xl font-bold tracking-tight mb-4">
              Projects start at $3,500.
            </p>
            <p className="text-[#374151] leading-relaxed text-lg">
              Retainers from $400/month. Rush delivery available. No complicated
              tier tables — just a flat rate, clear scope, and a two-week
              timeline from kickoff to launch.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9ca3af] mb-4">
            About
          </h2>
          <p className="text-2xl font-bold tracking-tight mb-10">
            Domain expertise matters.
          </p>
          <div className="max-w-2xl">
            <p className="text-[#374151] leading-relaxed text-xl font-light">
              I&apos;m Ali — MS3 at UConn, founder, and software engineer. I&apos;ve been
              building on the web for years and I care way too much about things
              loading fast and looking right. I work with a small number of
              clients at a time so I can actually focus on what I&apos;m building.
              The medical school angle isn&apos;t incidental — it means I actually
              understand what healthcare companies are trying to say.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9ca3af] mb-12">
            Contact
          </h2>
          <div className="max-w-xl">
            <p className="text-[#374151] leading-relaxed text-lg mb-10">
              Ready to start? Fill out the form below and I&apos;ll get back to you
              within 24 hours.
            </p>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#374151]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 text-sm border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": NAVY } as React.CSSProperties}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#374151]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 text-sm border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": NAVY } as React.CSSProperties}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#374151]">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-sm border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                  style={{ "--tw-ring-color": NAVY } as React.CSSProperties}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: NAVY }}
                className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-lg transition-opacity hover:opacity-85"
              >
                <Mail className="w-4 h-4" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <span className="text-sm text-[#9ca3af]">
            © {new Date().getFullYear()} Brask Studio
          </span>
        </div>
      </footer>
    </div>
  );
}
