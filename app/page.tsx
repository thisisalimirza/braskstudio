import Image from "next/image";
import { ArrowRight } from "lucide-react";

const NAVY = "#0F1B2D";

const projects = [
  {
    name: "Rounds",
    description:
      "Clinical reasoning platform used at 40+ medical schools. Designed around how physicians actually move through a case.",
    url: "https://getrounds.app",
    label: "Healthcare SaaS",
    image: "/portfolio/rounds.jpeg",
  },
  {
    name: "Sitr",
    description:
      "Replaced the spreadsheets medical schools relied on for seating. Handles hundreds of students per event.",
    url: "https://usesitr.com",
    label: "Healthcare SaaS",
    image: "/portfolio/sitr.jpeg",
  },
  {
    name: "Medical Innovation Podcast",
    description:
      "Brand and site for a podcast with practicing physicians and healthcare founders as guests. Looks like it belongs.",
    url: "https://medicalinnovationpod.com/",
    label: "Media",
    image: "/portfolio/medicalinnovationpodcast.png",
  },
  {
    name: "MD+",
    description:
      "Brand system and platform for 5,000 medical students and physicians building things on the side.",
    url: "https://mdplus-nine.vercel.app/",
    label: "Healthcare Community",
    image: "/portfolio/mdplus.png",
  },
  {
    name: "Byline",
    description:
      "Publishing platform for writers who'd rather own their audience than rent it from an algorithm.",
    url: "https://bylineblogs.com/",
    label: "SaaS",
    image: "/portfolio/byline.jpeg",
  },
  {
    name: "Supertasks",
    description:
      "Task manager with nothing extra. For founders who already know what they need to do.",
    url: "https://supertasks-app.vercel.app/",
    label: "Productivity",
    image: "/portfolio/Supertasks.png",
  },
];

const steps = [
  {
    week: "Week 1",
    description: "You send content. I build the architecture and design.",
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
    <div className="bg-[#fafaf9] text-[#111110] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-[#e7e5e4]">
        <div className="max-w-[1400px] mx-auto px-6 h-11 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-tight text-[#111110]">
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
                className="text-[11px] text-[#9ca3af] hover:text-[#111110] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 sm:pt-56 sm:pb-36 px-6 max-w-[1400px] mx-auto">
        <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-8">
          Brask Studio.
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-[#111110]">
          Websites that make you look as good as you actually are.
        </h1>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#6b7280] max-w-xl leading-relaxed font-light">
          We build clean, fast marketing sites for healthcare companies and
          early-stage startups. Two weeks, flat rate.
        </p>
        <a
          href="#contact"
          style={{ color: NAVY }}
          className="mt-10 sm:mt-12 inline-flex items-center gap-2 text-[11px] transition-opacity hover:opacity-60 tracking-[0.12em] uppercase font-semibold"
        >
          Start a project <ArrowRight className="w-3 h-3" />
        </a>
      </section>

      {/* Work — Mosaic Grid */}
      <section id="work" className="border-t border-[#e7e5e4]">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-6">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em]">
            work
          </p>
        </div>
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
        className="py-20 sm:py-28 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-12">
            how it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-10">
            {steps.map((step, i) => (
              <div key={step.week}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center font-semibold flex-shrink-0"
                    style={{ backgroundColor: NAVY }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: NAVY }}
                  >
                    {step.week}
                  </span>
                </div>
                <p className="text-[#374151] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6b7280] border-t border-[#e7e5e4] pt-6 leading-relaxed max-w-2xl">
            No hidden fees. Scope is set before we start. There's a real launch
            date you can plan around.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 sm:py-28 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-12">
            pricing
          </p>
          <div className="max-w-xl">
            <p className="text-2xl sm:text-3xl font-bold tracking-tight mb-5 text-[#111110]">
              Projects start at $3,500.
            </p>
            <p className="text-[#374151] leading-relaxed text-base sm:text-lg font-light">
              Retainers from $400/month. Rush delivery available. One price,
              one scope, two weeks from kickoff to launch. No tiers.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 sm:py-28 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-6">
            about
          </p>
          <p className="text-xl sm:text-2xl font-bold tracking-tight mb-10 text-[#111110]">
            Domain expertise matters.
          </p>
          <div className="max-w-2xl">
            <p className="text-[#374151] leading-relaxed text-base sm:text-lg font-light">
              I&apos;m Ali. MS3 at UConn, and I&apos;ve been building on the
              web for years. I care maybe too much about pages loading fast and
              designs looking right. I keep my client list small so I can stay
              focused.
            </p>
            <p className="text-[#374151] leading-relaxed text-base sm:text-lg font-light mt-5">
              The medical school thing isn&apos;t just for healthcare clients. It
              also means I&apos;m the kind of person you won&apos;t have to
              explain yourself to twice. If you&apos;ve ever hired someone and
              spent half the project re-explaining your own business to the
              person you&apos;re paying, that&apos;s what I&apos;m trying to
              not be. I pick things up fast. Say it once, I&apos;ve got it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 sm:py-28 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-24">
            {/* Left */}
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-6">
                contact
              </p>
              <p className="text-xl sm:text-2xl font-bold tracking-tight mb-6 text-[#111110] leading-snug">
                Building something in healthcare, or just need to ship in two
                weeks? Get in touch.
              </p>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Or email directly:
                <br />
                <a
                  href="mailto:hello@braskstudio.com"
                  style={{ color: NAVY }}
                  className="hover:opacity-70 transition-opacity"
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
                    style={{ backgroundColor: NAVY }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white hover:opacity-85 transition-opacity tracking-wide rounded-sm cursor-pointer"
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
      <footer className="py-8 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-xs text-[#9ca3af]">
            © {new Date().getFullYear()} Brask Studio
          </span>
          <div className="hidden sm:flex items-center gap-6">
            {["home", "work", "process", "about", "contact"].map((link) => (
              <a
                key={link}
                href={link === "home" ? "#" : `#${link}`}
                className="text-[11px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
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
