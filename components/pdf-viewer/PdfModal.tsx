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
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    const closeButton = dialogRef.current?.querySelector<HTMLButtonElement>('[data-dialog-close]');
    closeButton?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
      ));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
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
          onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={dialogRef}
            className="relative w-full max-w-6xl overflow-hidden rounded-md border border-[#dfe4df] bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-3 border-b border-[#dfe4df] bg-white p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#285b47]">Certificate preview</p>
                <h2 id="certificate-modal-title" className="mt-2 text-lg font-semibold text-[#17231e]">{certificate.title}</h2>
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
                  data-dialog-close
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
