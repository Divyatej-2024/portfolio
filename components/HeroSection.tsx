'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm uppercase tracking-[0.28em] text-cyan-300/80"
            >
              Enterprise Cybersecurity Profile
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl text-5xl font-semibold leading-tight text-slate-100 md:text-6xl lg:text-7xl"
            >
              Divya Tej Pendela — Certified Cybersecurity Engineer & Security Researcher.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl text-lg text-slate-400 sm:text-xl"
            >
              Modern portfolio designed for recruiters: interactive certifications, verified credentials, and skill-driven technical presentation for high-impact roles in cybersecurity and software engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => handleScroll('#projects')}
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explore Work
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 shadow-glow"
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-[24px] border border-cyan-400/10 bg-slate-950/90 p-6"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Credentials</p>
                <p className="mt-4 text-4xl font-bold text-cyan-400">72+</p>
                <p className="mt-2 text-sm text-slate-400">Verified certifications across cloud, security, and software development.</p>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-[20px] border border-white/10 bg-slate-950/80 p-5 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Technical Strengths</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• Cloud Security & Identity</li>
                    <li>• Network Architecture</li>
                    <li>• Python Automation</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-[20px] border border-white/10 bg-slate-950/80 p-5 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Recruiter Signal</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• PDF-based evidence</li>
                    <li>• Skills-first approach</li>
                    <li>• Enterprise design</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-slate-300"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
