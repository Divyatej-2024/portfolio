'use client';

import type { CertificationEntry } from '../../data/certifications';
import { motion } from 'framer-motion';

type CertificationCardProps = {
  certificate: CertificationEntry;
  onPreview: (certificate: CertificationEntry) => void;
};

const CATEGORY_STYLES: Record<string, string> = {
  Cybersecurity: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20',
  Cloud: 'bg-sky-500/10 text-sky-200 border-sky-500/20',
  Python: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20',
  Networking: 'bg-amber-500/10 text-amber-200 border-amber-500/20',
  Fortinet: 'bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/20',
  Cisco: 'bg-rose-500/10 text-rose-200 border-rose-500/20',
  Forage: 'bg-violet-500/10 text-violet-200 border-violet-500/20',
  Research: 'bg-slate-500/10 text-slate-200 border-slate-500/20',
  Development: 'bg-indigo-500/10 text-indigo-200 border-indigo-500/20'
};

const providerBadge = (provider: string) => {
  const initials = provider
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-slate-100 shadow-sm shadow-cyan-500/10">
      {initials}
    </div>
  );
};

export function CertificationCard({ certificate, onPreview }: CertificationCardProps) {
  const categoryClass = CATEGORY_STYLES[certificate.category] ?? CATEGORY_STYLES.Cybersecurity;
  const pdfUrl = `/certifications/${encodeURIComponent(certificate.fileName)}`;

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, type: 'spring', stiffness: 220 }}
      className="group rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-panel"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            {providerBadge(certificate.provider)}
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{certificate.provider}</p>
              <h3 className="text-lg font-semibold text-slate-100">{certificate.title}</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-500">
            <span>{certificate.date}</span>
            {certificate.credentialId ? <span>• {certificate.credentialId}</span> : null}
          </div>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryClass}`}>{certificate.category}</span>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {certificate.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700/80 bg-white/5 px-3 py-1 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {certificate.skills.slice(0, 4).map((skill) => (
              <span key={skill} className="rounded-2xl bg-white/5 px-3 py-2 text-xs font-medium tracking-wide text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4">
          <button
            type="button"
            onClick={() => onPreview(certificate)}
            className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Preview
          </button>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-200"
          >
            Download
          </a>
        </div>
      </div>
    </motion.article>
  );
}
