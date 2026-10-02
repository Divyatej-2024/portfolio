'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> SOC Analysis · Threat Detection · Security
          </p>
          <div className="space-y-5">
            <p className="text-sm font-medium tracking-wide text-slate-400">Hello, I’m Divya Tej Pendela</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building a safer <span className="text-cyan-300">digital world.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              First Class BSc (Hons) Cyber Security graduate from Teesside University, focused on threat detection, phishing analysis, and building practical SOC tools.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 font-semibold text-slate-100 hover:border-cyan-300/50 hover:text-cyan-200">
              View LinkedIn ↗
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-400">
            <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200">LinkedIn ↗</a>
            <a href="#certifications" className="hover:text-cyan-200">Credentials ↓</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] border border-cyan-300/15" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/40">
            <Image src="/images/profile.png" alt="Portrait of Divya Tej Pendela" fill priority sizes="(max-width: 768px) 90vw, 420px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent p-6 pt-24">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">Teesside University · 2026</p>
              <p className="mt-2 text-xl font-semibold text-white">BSc (Hons) Cyber Security · First Class</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl sm:block">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Based in</p>
            <p className="mt-1 font-semibold text-slate-100">United Kingdom</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
