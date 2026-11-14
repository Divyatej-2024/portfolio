'use client';

import { motion, useReducedMotion } from 'framer-motion';

const roles = [
  {
    title: 'Quality Controller (agency assignment)',
    period: '2026 – Present',
    summary: 'Quality checks and process-control support in a food manufacturing environment.',
    points: [
      'Carry out product and QAS checks in line with workplace procedures.',
      'Monitor and record temperature-control checks, escalating issues through the appropriate process.',
      'Complete quality paperwork and enter operational information into workplace systems.',
      'Review records and support routine process and TPM checks, maintaining accurate documentation.',
    ],
  },
  {
    title: 'Production Operative',
    period: '2024 – 2026',
    summary: 'Production and warehouse experience in a fast-paced operational environment.',
    points: [
      'Worked to production procedures, quality requirements and shift targets.',
      'Built experience working reliably as part of an operational team and following workplace safety processes.',
    ],
  },
];

export default function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-20 border-y border-[#e2e6e2] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        className="mx-auto max-w-7xl"
      >
        <header className="mb-10 max-w-3xl">
          <p className="section-kicker">Work history</p>
          <h2 className="section-heading mt-3">Professional experience</h2>
          <p className="mt-4 text-[15px] leading-7 text-[#59665f]">
            Practical experience in quality control and production, with transferable strengths in documentation, process compliance, data entry, checking and escalation.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {roles.map((role) => (
            <article key={role.title} className="border-t-2 border-[#285b47] pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-[#17231e]">{role.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#69756e]">{role.period}</span>
              </div>
              <p className="mt-2 text-sm text-[#59665f]">{role.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#34433a]">
                {role.points.map((point) => <li key={point} className="flex gap-3"><span aria-hidden="true" className="mt-[.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#285b47]" /><span>{point}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
