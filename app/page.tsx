import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LAUNCHED } from "./config";
import WaitlistForm from "./WaitlistForm";
import ContactForm from "./ContactForm";

const NAVY = "#0F1B2D";

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

const faqs = [
  {
    q: "What do I need to have ready before we start?",
    a: "Content mostly. Copy, brand assets, photos. But if you don't have what you need, I can come shoot it — labor and equipment are on me. If you're in another city, I'd need travel covered. One thing to know: if we're shooting content together, the two-week timeline goes out the window. We'd set a new one.",
  },
  {
    q: "What's included in the $3,500?",
    a: "A website you're happy with. No page limits, no revision tally — we work until it's right. I can offer this because I'm selective about who I work with. I need clients who can tell me what they want and give me honest feedback. If that's you, it works exactly as advertised.",
  },
  {
    q: "Two weeks — is that actually realistic?",
    a: "Yes, if you show up. The timeline depends on you getting content to me in week 1. If there are delays on your end, the timeline shifts. I'll tell you exactly what I need and when.",
  },
  {
    q: "I'm not in healthcare. Can you still help?",
    a: "Yes. Healthcare is where I have the deepest background, but the skills transfer. If you're in professional services, early-stage SaaS, or something adjacent, reach out and we'll figure out if there's a fit.",
  },
  {
    q: "What happens after launch?",
    a: "The site is yours. I can hand over the keys completely, or stay on with a retainer at $400/month for updates and edits. Most clients do a month or two while things settle, then drop off as needed.",
  },
  {
    q: "How does payment work?",
    a: "50% upfront, 50% on launch. I don't start until the first payment clears.",
  },
];

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#e7e5e4] rounded-lg overflow-hidden hover:border-[#d1cfcd] transition-colors"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#f3f2f1]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      <div className="px-4 py-3.5">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-sm font-semibold text-[#111110]">{project.name}</p>
          <span className="text-[11px] text-[#9ca3af] border border-[#e7e5e4] px-2 py-0.5 rounded-full whitespace-nowrap">
            {project.label}
          </span>
        </div>
        <p className="text-[13px] text-[#6b7280] leading-relaxed">{project.description}</p>
      </div>
    </a>
  );
}

function PreLaunchPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#111110] flex flex-col">
      {/* Nav */}
      <nav className="px-6 sm:px-8 py-5 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-tight">
          Brask Studio
        </span>
        <a
          href="#waitlist"
          className="text-[11px] font-medium border border-[#111110] px-4 py-2 tracking-wide hover:bg-[#111110] hover:text-[#fafaf9] transition-colors"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Centered hero */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl w-full">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9ca3af] mb-10">
            Launching Soon · Limited Spots
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-[#111110]">
            Websites that make you look as good as you actually are.
          </h1>
          <p className="text-[#6b7280] font-light leading-relaxed mb-10 text-base sm:text-lg max-w-lg mx-auto">
            We&apos;re opening a few early-access spots before the full
            launch. Lock in your project at pre-launch pricing — two weeks,
            flat rate.
          </p>
          {/* Inline email form */}
          <WaitlistForm />
          <p className="text-[11px] text-[#9ca3af] mt-4 leading-relaxed">
            No spam. We&apos;ll reach out personally when we&apos;re ready
            for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  if (!LAUNCHED) return <PreLaunchPage />;

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
                className="text-[11px] text-[#6b7280] hover:text-[#111110] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 sm:pt-52 sm:pb-20 px-6 max-w-[1400px] mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-[#111110]">
          Websites that make you look as good as you actually are.
        </h1>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#6b7280] max-w-xl leading-relaxed font-light">
          We build clean, fast marketing sites for healthcare companies and
          early-stage startups. Two weeks, flat rate.
        </p>
        <a
          href="#contact"
          style={{ backgroundColor: NAVY }}
          className="mt-10 sm:mt-12 inline-flex items-center gap-2.5 text-white text-xs font-medium px-5 py-2.5 rounded-sm transition-opacity hover:opacity-85"
        >
          Start a project <ArrowRight className="w-3 h-3" />
        </a>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-[#e7e5e4] py-14 sm:py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-8">
            work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works + Pricing (combined) */}
      <section
        id="process"
        className="py-14 sm:py-20 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-10">
            how it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8">
            {steps.map((step, i) => (
              <div key={step.week}>
                <div className="flex items-center gap-3 mb-3">
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
          <p className="text-xs text-[#6b7280] border-t border-[#e7e5e4] pt-6 leading-relaxed">
            No hidden fees. Scope is set before we start. There&apos;s a real
            launch date you can plan around.
          </p>

          {/* Pricing — folded in */}
          <div className="mt-12 pt-12 border-t border-[#e7e5e4] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 items-start">
            <div>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-5">
                pricing
              </p>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110]">
                Projects start at $3,500.
              </p>
            </div>
            <p className="text-[#374151] leading-relaxed sm:pt-9 font-light">
              Retainers from $400/month. Rush delivery available. One price,
              one scope, two weeks from kickoff to launch. No tiers.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-14 sm:py-20 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-6">
            about
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-10 sm:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight mb-8 text-[#111110]">
                Domain expertise matters.
              </p>
              <div className="max-w-2xl space-y-5">
                <p className="text-[#374151] leading-relaxed text-base sm:text-lg font-light">
                  I&apos;m Ali. MS3 at UConn, and I&apos;ve been building on
                  the web for years. I care maybe too much about pages loading
                  fast and designs looking right. I keep my client list small so
                  I can stay focused.
                </p>
                <p className="text-[#374151] leading-relaxed text-base sm:text-lg font-light">
                  The medical school thing isn&apos;t just for healthcare
                  clients. It also means I&apos;m the kind of person you
                  won&apos;t have to explain yourself to twice. If you&apos;ve
                  ever hired someone and spent half the project re-explaining
                  your own business to the person you&apos;re paying,
                  that&apos;s what I&apos;m trying to not be. I pick things up
                  fast. Say it once, I&apos;ve got it.
                </p>
                <a
                  href="https://www.linkedin.com/in/thisisalimirza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: NAVY }}
                  className="inline-block text-xs font-semibold tracking-wide hover:opacity-60 transition-opacity pt-2"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
            {/* Photo — grayscale, slight tilt, color on hover */}
            <div className="order-first sm:order-last flex sm:justify-end">
              <div className="group relative w-56 sm:w-full aspect-[4/5] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-[#e7e5e4]">
                <Image
                  src="/ali.jpeg"
                  alt="Ali Mirza"
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, 260px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-20 px-6 border-t border-[#e7e5e4]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#9ca3af] uppercase tracking-[0.18em] mb-10">
            common questions
          </p>
          <div className="divide-y divide-[#e7e5e4]">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 py-6"
              >
                <p className="text-sm font-semibold text-[#111110] leading-snug">
                  {q}
                </p>
                <p className="text-sm text-[#374151] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-14 sm:py-20 px-6 border-t border-[#e7e5e4]"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-24">
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
              <ContactForm />
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
            {["home", "work", "process", "about", "faq", "contact"].map(
              (link) => (
                <a
                  key={link}
                  href={link === "home" ? "#" : `#${link}`}
                  className="text-[11px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                >
                  {link}
                </a>
              )
            )}
            <a
              href="https://www.linkedin.com/in/thisisalimirza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
