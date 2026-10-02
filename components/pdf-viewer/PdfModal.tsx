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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#17231e]/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-md border border-[#dfe4df] bg-white shadow-2xl"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-3 border-b border-[#dfe4df] bg-white p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#285b47]">Certificate preview</p>
                <h2 className="mt-2 text-lg font-semibold text-[#17231e]">{certificate.title}</h2>
                <p className="mt-1 text-sm text-[#647168]">{certificate.provider} • {certificate.category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Open PDF
                </a>
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="secondary-button"
                >
                  Fullscreen
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="primary-button"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="min-h-[60vh] bg-[#eef0ec]">
              <iframe
                ref={iframeRef}
                src={pdfUrl}
                className="h-[70vh] w-full border-none bg-white"
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
