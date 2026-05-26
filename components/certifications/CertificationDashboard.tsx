'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { CertificationEntry } from '../../data/certifications';
import { PdfModal } from '../pdf-viewer/PdfModal';
import { CertificationCard } from './CertificationCard';
import { skillGroups, getSkillCategory } from '../../lib/skills/skill-map';

type CertificationDashboardProps = {
  certifications: CertificationEntry[];
};

const buttonStyles =
  'rounded-2xl border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60';

export function CertificationDashboard({ certifications }: CertificationDashboardProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationEntry | null>(null);
  const [search, setSearch] = useState('');
  const [providerFilter, setProviderFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [skillFilter, setSkillFilter] = useState('All');

  const providers = useMemo(() => {
    const set = new Set(['All']);
    certifications.forEach((cert) => set.add(cert.provider));
    return Array.from(set);
  }, [certifications]);

  const categories = useMemo(() => {
    const set = new Set(['All']);
    certifications.forEach((cert) => set.add(cert.category));
    return Array.from(set);
  }, [certifications]);

  const skillOptions = useMemo(() => {
    const set = new Set(['All']);
    certifications.forEach((cert) => cert.skills.forEach((skill) => set.add(skill)));
    return Array.from(set);
  }, [certifications]);

  const filteredCertifications = useMemo(() => {
    const query = search.trim().toLowerCase();
    return certifications.filter((cert) => {
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.provider.toLowerCase().includes(query) ||
        cert.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        cert.skills.some((skill) => skill.toLowerCase().includes(query));

      const matchesProvider = providerFilter === 'All' || cert.provider === providerFilter;
      const matchesCategory = categoryFilter === 'All' || cert.category === categoryFilter;
      const matchesSkill = skillFilter === 'All' || cert.skills.includes(skillFilter);

      return matchesSearch && matchesProvider && matchesCategory && matchesSkill;
    });
  }, [certifications, search, providerFilter, categoryFilter, skillFilter]);

  const skillSummary = useMemo(() => {
    const buckets = new Map<string, number>();
    certifications.forEach((cert) => {
      cert.skills.forEach((skill) => {
        const category = getSkillCategory(skill);
        buckets.set(category, (buckets.get(category) ?? 0) + 1);
      });
    });
    return Array.from(buckets.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([category, count]) => ({ category, count }));
  }, [certifications]);

  return (
    <div className="space-y-8">
      <section className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/90 p-8 shadow-panel">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Certification command center</p>
            <h1 className="text-4xl font-semibold text-slate-100">Modern credential dashboard for cybersecurity recruiters</h1>
            <p className="max-w-2xl text-slate-400">
              Explore every verified certificate, preview the original PDF instantly, and surface skills from each award. This page is built to impress hiring managers with a professional certification portfolio, security maturity, and dynamic filtering.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-white/10">
              <p className="text-sm text-slate-400">Certificates indexed</p>
              <p className="mt-3 text-3xl font-semibold text-slate-100">{certifications.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-white/10">
              <p className="text-sm text-slate-400">Skills surfaces</p>
              <p className="mt-3 text-3xl font-semibold text-slate-100">{skillOptions.length - 1}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.5fr_1fr] xl:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by certificate, provider, or skill"
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
              <select
                value={providerFilter}
                onChange={(event) => setProviderFilter(event.target.value)}
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              >
                {providers.map((provider) => (
                  <option key={provider} value={provider} className="bg-slate-950 text-slate-100">
                    {provider}
                  </option>
                ))}
              </select>
              <div className="grid gap-3 sm:grid-cols-2">
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="All">All Categories</option>
                  {categories.map((category) =>
                    category === 'All' ? null : (
                      <option key={category} value={category} className="bg-slate-950 text-slate-100">
                        {category}
                      </option>
                    )
                  )}
                </select>
                <select
                  value={skillFilter}
                  onChange={(event) => setSkillFilter(event.target.value)}
                  className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {skillOptions.map((skill) => (
                    <option key={skill} value={skill} className="bg-slate-950 text-slate-100">
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Skill clusters</p>
            <div className="mt-5 space-y-3">
              {skillSummary.slice(0, 6).map(({ category, count }) => (
                <div key={category} className="flex items-center justify-between rounded-3xl bg-slate-950/80 px-4 py-3 text-sm">
                  <span>{category}</span>
                  <span className="rounded-full bg-slate-800/90 px-3 py-1 text-slate-100">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Credential portfolio</p>
            <h2 className="text-3xl font-semibold text-slate-100">Certification showcase</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Recruiters can browse by provider, inspect each PDF, and reveal the technical skills behind every credential. This dashboard is designed like an enterprise security control plane.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_minmax(300px,0.5fr)]">
          <div className="grid gap-4">
// Lines 173-186: Displays ALL filtered certifications (no limit)
{filteredCertifications.length ? (
  filteredCertifications.map((certificate) => (  // ✅ Maps ALL certs
    <CertificationCard
      key={certificate.id}
      certificate={certificate}
      onPreview={setSelectedCertificate}
    />
  ))
) : (
  <div className="rounded-3xl border border-dashed border-slate-600 bg-slate-900/70 p-8 text-center text-slate-400">
    No certifications match the current search or filters.
  </div>
)}          </div>

          <aside className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Recruiter signal</p>
              <div className="grid gap-3 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-slate-400">Filtering live</p>
                  <p className="mt-2 text-xl font-semibold text-slate-100">{filteredCertifications.length} / {certifications.length} certificates</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-slate-400">Primary skill categories</p>
                  <p className="mt-2 text-xl font-semibold text-slate-100">{skillSummary[0]?.category ?? 'Cybersecurity'}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Vet each credential</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Instant PDF preview without leaving the portfolio.</li>
                <li>• Downloadable evidence for recruiter verification.</li>
                <li>• Skill tags surfaced for every certificate.</li>
                <li>• Cloud-native dashboard feel for enterprise recruitment.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <PdfModal open={Boolean(selectedCertificate)} certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
    </div>
  );
}
