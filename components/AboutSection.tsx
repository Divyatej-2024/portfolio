'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const highlights = [
    { label: 'Experience', value: 'Graduate' },
    { label: 'Focus', value: 'Cybersecurity' },
    { label: 'Certifications', value: '72+' },
    { label: 'Projects', value: '15+' }
  ];

  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">About Me</p>
              <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">
                Certified Cybersecurity Engineer & Researcher
              </h2>
            </div>

            <p className="text-lg text-slate-400">
              Graduate cybersecurity professional with comprehensive expertise in enterprise security operations, cloud security, network architecture, and machine learning applications for threat detection.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-100">Key Areas of Focus</h3>
              <ul className="space-y-3">
                {[
                  'Cloud Security & Identity Management (AWS, Azure)',
                  'Network Architecture & Infrastructure Security',
                  'Cybersecurity Operations & Incident Response',
                  'Python Automation & Security Scripting',
                  'Machine Learning for Email & Threat Security',
                  'Secure Web Application Development'
                ].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Professional Goal</h3>
              <p className="text-slate-400">
                Seeking graduate roles in cybersecurity, cloud security, and FinTech engineering from September 2026. Focused on delivering enterprise-grade security solutions and driving digital transformation through technical excellence.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-[20px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-cyan-400">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
