'use client';

import { motion } from 'framer-motion';
import { certificationsData } from '@/data/certifications';

export default function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="certifications" className="scroll-mt-20 px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Credentials</p>
          <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">Certifications & Achievements</h2>
          <p className="max-w-2xl text-lg text-slate-400">
            Professional certifications and credentials demonstrating expertise across cybersecurity, cloud, and software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {certificationsData.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-[20px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow"
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-100 group-hover:text-cyan-300">{cert.title}</h3>
                      <p className="mt-1 text-sm text-cyan-400/80">{cert.issuer}</p>
                    </div>
                    <p className="text-xs text-slate-500">{cert.date}</p>
                  </div>
                </a>
              ) : (
                <div className="h-full rounded-[20px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-100">{cert.title}</h3>
                      <p className="mt-1 text-sm text-cyan-400/80">{cert.issuer}</p>
                    </div>
                    <p className="text-xs text-slate-500">{cert.date}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
