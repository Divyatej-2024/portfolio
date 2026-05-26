'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function DemoRequestModal({ isOpen, onClose, projectTitle }: DemoRequestModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-panel backdrop-blur-xl">
          {submitted ? (
            <div className="space-y-4 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20"
              >
                <span className="text-2xl text-cyan-400">✓</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-100">Request Sent!</h3>
              <p className="text-slate-400">I'll get back to you soon with demo details.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-100">Request a Demo</h3>
                <p className="mt-2 text-sm text-slate-400">{projectTitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 h-24 w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none"
                    placeholder="Tell me about your interest..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900/50 hover:text-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
