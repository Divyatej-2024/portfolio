'use client';

import { useMemo, useState } from 'react';
import type { CertificationEntry } from '../../data/certifications';
import { PdfModal } from '../pdf-viewer/PdfModal';
import { CertificationCard } from './CertificationCard';

type CertificationDashboardProps = { certifications: CertificationEntry[] };

const selectClass = 'w-full rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm text-[#24332a] outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10';

export function CertificationDashboard({ certifications }: CertificationDashboardProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationEntry | null>(null);
  const [search, setSearch] = useState('');
  const [providerFilter, setProviderFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const providers = useMemo(() => ['All', ...new Set(certifications.map((cert) => cert.provider))], [certifications]);
  const categories = useMemo(() => ['All', ...new Set(certifications.map((cert) => cert.category))], [certifications]);

  const filteredCertifications = useMemo(() => {
    const query = search.trim().toLowerCase();
    return certifications.filter((cert) => {
      const matchesSearch = !query || cert.title.toLowerCase().includes(query) || cert.provider.toLowerCase().includes(query) || cert.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesSearch && (providerFilter === 'All' || cert.provider === providerFilter) && (categoryFilter === 'All' || cert.category === categoryFilter);
    });
  }, [certifications, search, providerFilter, categoryFilter]);

  return (
    <div className="space-y-10">
      <header className="max-w-3xl border-b border-[#dfe4df] pb-8">
        <p className="section-kicker">Professional development</p>
        <h1 className="display-face mt-3 text-5xl font-medium tracking-tight text-[#17231e] sm:text-6xl">Credentials & learning</h1>
        <p className="mt-5 text-base leading-7 text-[#59665f]">Forage job simulations, Microsoft Learn achievements, and course certificates. The award dates and titles shown here come from the documents themselves.</p>
      </header>

      <section aria-label="Filter credentials" className="grid gap-3 border-b border-[#dfe4df] pb-7 sm:grid-cols-2 lg:grid-cols-3">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search credentials" aria-label="Search credentials" className={selectClass} />
        <select aria-label="Filter by provider" value={providerFilter} onChange={(event) => setProviderFilter(event.target.value)} className={selectClass}>
          {providers.map((provider) => <option key={provider} value={provider}>{provider === 'All' ? 'All providers' : provider}</option>)}
        </select>
        <select aria-label="Filter by category" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className={selectClass}>
          {categories.map((category) => <option key={category} value={category}>{category === 'All' ? 'All categories' : category}</option>)}
        </select>
      </section>

      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#17231e]">Certificates, simulations & learning achievements</h2>
        <p aria-live="polite" className="text-sm text-[#647168]">Showing {filteredCertifications.length} of {certifications.length}</p>
      </div>
      {filteredCertifications.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredCertifications.map((certificate) => <CertificationCard key={certificate.id} certificate={certificate} onPreview={setSelectedCertificate} />)}
        </div>
      ) : (
        <p className="border-t border-[#dfe4df] py-8 text-sm text-[#647168]">No credentials match these filters.</p>
      )}

      <PdfModal open={Boolean(selectedCertificate)} certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
    </div>
  );
}
