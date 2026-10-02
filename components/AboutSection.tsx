'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const highlights = [
    { label: 'Degree', value: 'BSc (Hons) · First Class' },
    { label: 'University', value: 'Teesside · 2026' },
    { label: 'Focus', value: 'SOC & Threat Detection' },
    { label: 'Currently learning', value: 'Splunk · Sentinel' }
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
                Cyber Security graduate, ready to contribute
              </h2>
            </div>

            <p className="text-lg text-slate-400">
              I recently graduated with First Class honours from Teesside University. I’m focused on entry-level security analyst work, with hands-on projects around phishing analysis, security event monitoring, and network defence.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-100">Key Areas of Focus</h3>
              <ul className="space-y-3">
                {[
                  'SOC operations and security event monitoring',
                  'Threat detection, alert triage, and threat hunting',
                  'Phishing analysis and security awareness',
                  'Splunk and Microsoft Sentinel (currently learning)',
                  'Network defence and IPsec VPN design',
                  'Python and web tools for security workflows'
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
                I’m actively seeking an entry-level Cyber Security Analyst or SOC Analyst role in the UK. I’m keen to contribute to a security team while continuing to grow my threat detection and incident response skills.
              </p>
            </div>

            <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="block rounded-[24px] border border-cyan-300/15 bg-cyan-300/[0.04] p-6 transition hover:border-cyan-300/35">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Recent milestone · 2026</p>
              <p className="mt-2 text-slate-200">Graduated with First Class honours in Cyber Security and shared the graduation and degree certificate milestone on LinkedIn.</p>
              <span className="mt-4 inline-block text-sm font-medium text-cyan-300">View LinkedIn profile ↗</span>
            </a>
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
