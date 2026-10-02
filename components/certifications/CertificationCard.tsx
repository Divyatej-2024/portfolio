'use client';

import type { CertificationEntry } from '../../data/certifications';

type CertificationCardProps = {
  certificate: CertificationEntry;
  onPreview: (certificate: CertificationEntry) => void;
};

export function CertificationCard({ certificate, onPreview }: CertificationCardProps) {
  const pdfUrl = `/certifications/${encodeURIComponent(certificate.fileName)}`;

  return (
    <article className="flex h-full flex-col rounded-md border border-[#dfe4df] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#647168]">{certificate.provider} <span className="px-1 text-[#a7b0aa]">·</span> {certificate.date}</p>
        <span className="tag">{certificate.category}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-[#17231e]">{certificate.title}</h3>
      {certificate.credentialId && <p className="mt-2 break-all text-xs text-[#647168]">Credential ID: {certificate.credentialId}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {certificate.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      {certificate.skills.length > 0 && <p className="mt-4 text-xs leading-5 text-[#647168]">{certificate.skills.slice(0, 4).join(' · ')}</p>}
      <div className="mt-auto flex gap-5 border-t border-[#e8ebe8] pt-4 text-sm">
        <button type="button" onClick={() => onPreview(certificate)} className="text-link">Preview PDF</button>
        <a href={pdfUrl} download className="text-link">Download</a>
      </div>
    </article>
  );
}
