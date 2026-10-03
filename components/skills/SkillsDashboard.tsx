'use client';

import { useMemo, useState } from 'react';
import type { Skill } from '../../lib/types';

type SkillsDashboardProps = { groups: Skill[] };

const controlClass = 'w-full rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm text-[#24332a] outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10';

export function SkillsDashboard({ groups }: SkillsDashboardProps) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const categories = useMemo(() => ['All', ...groups.map((group) => group.category)], [groups]);
  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase();
    return groups
      .filter((group) => categoryFilter === 'All' || group.category === categoryFilter)
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => !query || item.toLowerCase().includes(query) || group.category.toLowerCase().includes(query)),
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, search, categoryFilter]);
  const visibleSkillCount = filteredGroups.reduce((count, group) => count + group.items.length, 0);
  const totalSkillCount = groups.reduce((count, group) => count + group.items.length, 0);

  return (
    <div className="space-y-10">
      <header className="max-w-3xl border-b border-[#dfe4df] pb-8">
        <p className="section-kicker">Technical profile</p>
        <h1 className="display-face mt-3 text-5xl font-medium tracking-tight text-[#17231e] sm:text-6xl">Skills & tools</h1>
        <p className="mt-5 text-base leading-7 text-[#59665f]">A clear view of my cybersecurity, software, and infrastructure skills, organised by area. Tools marked as currently learning are identified as such.</p>
      </header>

      <section aria-label="Filter skills" className="grid gap-3 border-b border-[#dfe4df] pb-7 sm:grid-cols-2">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search skills or tools" aria-label="Search skills or tools" className={controlClass} />
        <select aria-label="Filter by skill area" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className={controlClass}>
          {categories.map((category) => <option key={category} value={category}>{category === 'All' ? 'All skill areas' : category}</option>)}
        </select>
      </section>

      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#17231e]">Skill areas</h2>
        <p aria-live="polite" className="text-sm text-[#647168]">Showing {visibleSkillCount} of {totalSkillCount} skills</p>
      </div>

      {filteredGroups.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredGroups.map((group) => (
            <section key={group.category} className="rounded-md border border-[#dfe4df] bg-white p-6">
              <h3 className="text-lg font-semibold text-[#17231e]">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => <li key={skill} className="tag">{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <p className="border-t border-[#dfe4df] py-8 text-sm text-[#647168]">No skills match these filters.</p>
      )}
    </div>
  );
}
