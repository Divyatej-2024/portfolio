'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="scroll-mt-20 px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Technical Expertise</p>
          <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">Skills & Expertise</h2>
          <p className="max-w-2xl text-lg text-slate-400">
            Comprehensive skill set spanning cybersecurity, cloud infrastructure, programming, and advanced analytics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillsData.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
            >
              <h3 className="mb-4 text-lg font-semibold text-cyan-400">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-500/60" />
                    <span className="text-sm text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
