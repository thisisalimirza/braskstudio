import { ArrowRight, Mail } from "lucide-react";

const projects = [
  {
    name: "Rounds",
    description: "Patient handoff platform for hospital residents.",
    url: "https://rounds.care",
    bg: "bg-slate-100",
    label: "Healthcare SaaS",
  },
  {
    name: "Project Two",
    description: "Marketing site for an early-stage fintech startup.",
    url: "#",
    bg: "bg-stone-100",
    label: "Fintech",
  },
  {
    name: "Project Three",
    description: "Brand and web presence for a boutique consulting firm.",
    url: "#",
    bg: "bg-zinc-100",
    label: "Consulting",
  },
];

const steps = [
  { week: "Week 1", description: "You send content. I build." },
  { week: "Week 2", description: "We refine. We launch." },
  { week: "Ongoing", description: "Optional retainer for edits and updates." },
];

export default function Home() {
  return (
    <div className="bg-[#fafaf9] text-[#111110]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">Brask Studio</span>
          <a
            href="#contact"
            className="text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold tracking-tight leading-[1.1] max-w-2xl">
            Websites that make you look as good as you actually are.
          </h1>
          <p className="mt-6 text-lg text-[#78716c] max-w-lg leading-relaxed">
            I build clean, fast marketing sites for healthcare startups and
            early-stage companies. Two weeks, flat rate.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#78716c] mb-10">
            Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-[#e7e5e4] hover:border-[#a8a29e] transition-colors"
              >
                <div
                  className={`${project.bg} h-44 flex items-center justify-center`}
                >
                  <span className="text-2xl font-semibold tracking-tight text-[#44403c]">
                    {project.name}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold">{project.name}</span>
                    <span className="text-xs text-[#78716c] bg-[#f5f5f4] px-2 py-0.5 rounded-full">
                      {project.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#78716c]">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#78716c] mb-10">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.week}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs flex items-center justify-center font-semibold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#2563eb]">
                    {step.week}
                  </span>
                </div>
                <p className="text-[#44403c] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#78716c] mb-10">
            Pricing
          </h2>
          <div className="max-w-xl">
            <p className="text-xl font-semibold tracking-tight mb-4">
              Projects start at $3,500.
            </p>
            <p className="text-[#44403c] leading-relaxed">
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#78716c] mb-10">
            About
          </h2>
          <div className="max-w-xl">
            <p className="text-[#44403c] leading-relaxed text-lg">
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#78716c] mb-10">
            Contact
          </h2>
          <div className="max-w-xl">
            <p className="text-[#44403c] leading-relaxed mb-8">
              Ready to start? Fill out the form below and I&apos;ll get back to you
              within 24 hours.
            </p>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-[#e7e5e4] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-[#e7e5e4] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                >
                  What are you building?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 text-sm border border-[#e7e5e4] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
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
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm text-[#78716c]">
            © {new Date().getFullYear()} Brask Studio
          </span>
          <a
            href="https://linkedin.com/in/thisisalimirza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#78716c] hover:text-[#111110] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
