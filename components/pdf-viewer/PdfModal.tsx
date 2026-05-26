'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CertificationEntry } from '../../data/certifications';

type PdfModalProps = {
  open: boolean;
  certificate: CertificationEntry | null;
  onClose: () => void;
};

export function PdfModal({ open, certificate, onClose }: PdfModalProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleFullscreen = async () => {
    if (!iframeRef.current) return;
    try {
      await iframeRef.current.requestFullscreen?.();
    } catch (error) {
      console.warn('Fullscreen unavailable', error);
    }
  };

  if (!certificate) return null;

  const pdfUrl = `/certifications/${encodeURIComponent(certificate.fileName)}`;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-panel"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-3 border-b border-white/10 bg-slate-900/90 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Certificate Preview</p>
                <h2 className="mt-2 text-lg font-semibold text-slate-100">{certificate.title}</h2>
                <p className="mt-1 text-sm text-slate-400">{certificate.provider} • {certificate.category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  Open PDF
                </a>
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  Fullscreen
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="min-h-[60vh] bg-slate-950/90">
              <iframe
                ref={iframeRef}
                src={pdfUrl}
                className="h-[70vh] w-full border-none bg-slate-950"
                loading="lazy"
                title={certificate.title}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
