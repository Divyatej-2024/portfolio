'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="home" className="scroll-mt-24 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.35 }} className="max-w-3xl">
          <p className="section-kicker">Cyber Security · First Class Graduate</p>
          <h1 className="display-face mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-[#17231e] sm:text-6xl lg:text-[4.65rem]">
            Divya Tej<br className="hidden sm:block" /> Pendela
          </h1>
          <p className="mt-5 text-lg font-medium text-[#285b47] sm:text-xl">Seeking Cyber Security Analyst / SOC Analyst roles · UK</p>
          <p className="body-copy mt-6 max-w-2xl">
            First Class BSc (Hons) Cyber Security graduate from Teesside University, looking for an entry-level role where I can contribute to security operations, threat detection, and phishing analysis.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="primary-button">View selected work <span aria-hidden="true">↗</span></a>
            <a href="mailto:pdivyatej2003@gmail.com" className="secondary-button">Contact me</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#dfe4df] pt-5 text-sm">
            <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="text-link">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn ↗</a>
            <a href="#certifications" className="text-link">Certifications ↓</a>
          </div>
        </motion.div>

        <motion.figure initial={prefersReducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.08 }} className="mx-auto w-full max-w-[420px]">
          <div className="relative aspect-[4/4.35] overflow-hidden rounded-sm bg-[#e9ece8]">
            <Image src="/images/profile.png" alt="Portrait of Divya Tej Pendela" fill priority sizes="(max-width: 768px) 90vw, 420px" className="object-cover" />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-[#dfe4df] pb-3">
            <span className="text-sm font-semibold text-[#17231e]">BSc (Hons) Cyber Security</span>
            <span className="text-xs text-[#647168]">Teesside University · 2026</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
