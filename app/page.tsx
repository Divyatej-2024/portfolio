import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="rounded-[36px] border border-white/10 bg-slate-950/90 p-8 shadow-panel backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Enterprise cybersecurity profile</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-slate-100 md:text-6xl">
                Divya Tej Pendela — Certified Cybersecurity Engineer & Security Researcher.
              </h1>
              <p className="max-w-2xl text-lg text-slate-400 sm:text-xl">
                Modern portfolio designed for recruiters: interactive certifications, verified PDF evidence, and skill-driven credential presentation for high-impact technical roles.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/certifications" className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Explore Certifications
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-200">
                  Contact & Roles
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 shadow-glow"
            >
              <div className="space-y-5">
                <div className="rounded-3xl border border-cyan-400/10 bg-slate-950/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Credentials</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-100">72 certificates</p>
                  <p className="mt-2 text-sm text-slate-400">Verified PDFs, career simulations, cloud security, network operations, and programming credentials.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Technical strengths</p>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      <li>• Cloud Security & Identity</li>
                      <li>• Network Architecture</li>
                      <li>• Python Automation</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Recruiter signal</p>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      <li>• PDF-based credential evidence</li>
                      <li>• Skills mapped to each certification</li>
                      <li>• Enterprise-grade dashboard layout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="rounded-[36px] border border-white/10 bg-slate-950/90 p-8 shadow-panel backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-5">
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40 rounded-full border-4 border-white/6 overflow-hidden shadow-glow">
                  <Image src="/images/profile.png" alt="Divya Tej Pendela" fill sizes="(max-width: 768px) 120px, 160px" className="object-cover" />
                </div>
              </div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Resume summary</p>
              <h2 className="text-3xl font-semibold text-slate-100">Ready for cyber risk, cloud security, and software engineering roles.</h2>
              <p className="text-slate-400">
                Graduate cybersecurity and software talent with experience in ML for email security, secure web applications, enterprise network planning, and security operations automation.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Contact</p>
              <p className="text-lg font-semibold text-slate-100">divya.tej.pendela@example.com</p>
              <p className="text-lg font-semibold text-slate-100">+44 7776 751102</p>
              <p className="text-sm text-slate-400">Available for graduate roles in cybersecurity and FinTech engineering from September 2026.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
