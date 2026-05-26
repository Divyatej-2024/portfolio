'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Get in Touch</p>
          <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">Let's Connect</h2>
          <p className="max-w-2xl text-lg text-slate-400">
            Open to discussing cybersecurity, cloud architecture, software development, or research collaboration opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-slate-100">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <a
                    href="mailto:pdivyatej2003@gmail.com"
                    className="mt-2 text-lg text-cyan-400 transition hover:text-cyan-300"
                  >
                    pdivyatej2003@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                  <a href="tel:+447776751102" className="mt-2 text-lg text-cyan-400 transition hover:text-cyan-300">
                    +44 7776 751102
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Availability</p>
                  <p className="mt-2 text-lg text-slate-300">Available for graduate roles from September 2026</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-lg font-semibold text-slate-100">Connect</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Divyatej-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-semibold text-slate-100">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Project inquiry or collaboration"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  placeholder="Tell me about your interest or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
