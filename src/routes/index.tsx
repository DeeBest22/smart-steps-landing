import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calculator, FlaskConical, Dna, Languages } from "lucide-react";

import heroStudent from "@/assets/hero-student.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Steps Tutorial — JAMB/UTME Exam Prep in Nigeria" },
      {
        name: "description",
        content:
          "Prepare for JAMB/UTME with expert tutors, a proven curriculum, and technology-driven learning. Mathematics, English, Physics, Chemistry, Biology and more.",
      },
      {
        property: "og:title",
        content: "Smart Steps Tutorial — One Smart Step Closer to Success",
      },
      {
        property: "og:description",
        content:
          "Nigeria's trusted JAMB/UTME prep platform. Bridge the gap between academic potential and achievement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const subjects = [
  {
    title: "Mathematics",
    description:
      "Master problem-solving techniques, algebraic reasoning, and geometric theorems with shortcut strategies built for UTME-style questions.",
    icon: Calculator,
    iconBg: "bg-blue-50",
    iconColor: "text-brand-blue",
  },
  {
    title: "English Language",
    description:
      "Build grammar precision, expand vocabulary, and develop reading comprehension speed for the compulsory Use of English paper.",
    icon: Languages,
    iconBg: "bg-amber-50",
    iconColor: "text-brand-gold",
  },
  {
    title: "Physics",
    description:
      "Move from definitions to deep conceptual understanding in mechanics, electricity, waves, and optics with practical worked examples.",
    icon: BookOpen,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Chemistry",
    description:
      "Navigate organic reactions, periodic properties, and stoichiometry with clarity, laboratory context, and exam-focused drills.",
    icon: FlaskConical,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Biology",
    description:
      "Master cell biology, genetics, anatomy, and ecology through visual learning paths and memory-retention techniques.",
    icon: Dna,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-brand-navy/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
              S
            </div>
            <span className="font-heading text-xl tracking-tight">SmartSteps</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#subjects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Subjects
            </a>
            <a
              href="#methodology"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Methodology
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </a>
            <button className="rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary">
              Start Learning
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              2025 Registration Open
            </div>
            <h1 className="font-heading text-5xl leading-[1.1] md:text-7xl">
              One Smart Step <br />
              <span className="text-primary">Closer to Success.</span>
            </h1>
            <p className="mb-10 mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Master the JAMB/UTME syllabus with Nigeria&apos;s most trusted tutors. We combine
              proven curriculum with technology-driven learning to unlock your university dreams.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]">
                Enroll Now
              </button>
              <button className="rounded-xl border border-border bg-card px-8 py-4 text-lg font-bold text-foreground transition-colors hover:bg-accent">
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="size-10 rounded-full border-2 border-white bg-slate-200" />
                <div className="size-10 rounded-full border-2 border-white bg-slate-300" />
                <div className="size-10 rounded-full border-2 border-white bg-slate-400" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Joined by 12,000+ students this month
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroStudent}
              alt="Focused Nigerian student preparing for JAMB/UTME with headphones and laptop"
              width={1024}
              height={1024}
              className="relative z-10 aspect-square w-full rounded-3xl object-cover shadow-2xl"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl bg-accent p-6 shadow-xl md:block">
              <p className="font-heading text-3xl font-extrabold text-accent-foreground">94%</p>
              <p className="text-xs font-bold uppercase text-accent-foreground/70">Success Rate</p>
            </div>
          </div>
        </div>
      </header>

      {/* Subjects Grid */}
      <section id="subjects" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl">Master Your Key Subjects</h2>
            <p className="mt-4 text-muted-foreground">
              Tailored preparation for your specific department requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <div
                  key={subject.title}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div
                    className={`mb-6 flex size-12 items-center justify-center rounded-xl ${subject.iconBg} ${subject.iconColor}`}
                  >
                    <Icon className="size-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-xl">{subject.title}</h3>
                  <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">
                    {subject.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3"
                  >
                    Explore Curriculum <ArrowRight className="size-4" />
                  </a>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-navy p-8 text-center text-white">
              <h3 className="font-heading text-xl">More Subjects...</h3>
              <p className="mb-6 mt-4 text-sm text-white/70">
                We cover 12+ UTME subjects including Government, CRK, and Accounts.
              </p>
              <button className="w-full rounded-xl bg-primary py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                View All Subjects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Methodology */}
      <section id="methodology" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl">Confidence Through Competence</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our mission is to bridge the gap between academic potential and achievement. We combine
            expert tutors, a proven Nigerian curriculum, and technology-driven learning to ensure every
            student is fully prepared for JAMB/UTME success.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 text-left">
              <div className="mb-4 font-heading text-3xl font-extrabold text-primary">01</div>
              <h4 className="font-heading text-lg">Expert Tutors</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn from experienced educators who understand the UTME format inside out.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-left">
              <div className="mb-4 font-heading text-3xl font-extrabold text-primary">02</div>
              <h4 className="font-heading text-lg">Proven Curriculum</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Structured syllabi aligned with current JAMB standards and past-question patterns.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-left">
              <div className="mb-4 font-heading text-3xl font-extrabold text-primary">03</div>
              <h4 className="font-heading text-lg">Tech-Driven Learning</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Practice tests, video lessons, and progress tracking available on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-12 text-center text-primary-foreground">
            <div className="relative z-10">
              <h2 className="font-heading text-4xl">Ready to secure your admission?</h2>
              <p className="mx-auto mb-10 mt-6 max-w-md text-lg text-primary-foreground/80">
                Join thousands of students who have crossed the gap between potential and
                achievement.
              </p>
              <button className="rounded-full bg-white px-10 py-4 text-lg font-extrabold text-primary shadow-2xl transition-all hover:shadow-xl">
                Get Started Today
              </button>
            </div>
            <div className="absolute -right-12 -top-12 size-48 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-12 -left-12 size-64 rounded-full bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-brand-navy text-[10px] font-bold text-white">
              S
            </div>
            <span className="font-heading text-sm font-bold">Smart Steps Tutorial</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Smart Steps Tutorial. One Smart Step Closer to
            Success.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
