'use client';

import { useMemo, useState } from 'react';
import type { Project } from '../../data/projects';

type ProjectDashboardProps = { projects: Project[] };

const controlClass = 'w-full rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm text-[#24332a] outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10';

export function ProjectDashboard({ projects }: ProjectDashboardProps) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [technologyFilter, setTechnologyFilter] = useState('All');

  const technologies = useMemo(() => ['All', ...new Set(projects.flatMap((project) => project.tags))], [projects]);
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesSearch = !query || project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query) || project.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesSearch && (statusFilter === 'All' || project.status === statusFilter) && (technologyFilter === 'All' || project.tags.includes(technologyFilter));
    });
  }, [projects, search, statusFilter, technologyFilter]);

  return (
    <div className="space-y-10">
      <header className="max-w-3xl border-b border-[#dfe4df] pb-8">
        <p className="section-kicker">Selected work</p>
        <h1 className="display-face mt-3 text-5xl font-medium tracking-tight text-[#17231e] sm:text-6xl">Projects & builds</h1>
        <p className="mt-5 text-base leading-7 text-[#59665f]">A collection of cybersecurity, software, and networking projects. Browse by technology or development status, and open the source repositories for details.</p>
      </header>

      <section aria-label="Filter projects" className="grid gap-3 border-b border-[#dfe4df] pb-7 sm:grid-cols-2 lg:grid-cols-3">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" aria-label="Search projects" className={controlClass} />
        <select aria-label="Filter by status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className={controlClass}>
          <option value="All">All statuses</option>
          <option value="active">Active</option>
          <option value="development">In progress</option>
          <option value="research">Research</option>
          <option value="pending">Planned</option>
        </select>
        <select aria-label="Filter by technology" value={technologyFilter} onChange={(event) => setTechnologyFilter(event.target.value)} className={controlClass}>
          {technologies.map((technology) => <option key={technology} value={technology}>{technology === 'All' ? 'All technologies' : technology}</option>)}
        </select>
      </section>

      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#17231e]">Portfolio projects</h2>
        <p className="text-sm text-[#647168]">Showing {filteredProjects.length} of {projects.length}</p>
      </div>
      {filteredProjects.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.id} className="flex h-full flex-col rounded-md border border-[#dfe4df] bg-white p-6 transition hover:border-[#a8b9ad]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-[#17231e]">{project.title}</h3>
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-[#647168]">{project.status === 'development' ? 'In progress' : project.status}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#59665f]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              {(project.live || project.repo) && <div className="mt-6 flex gap-4 border-t border-[#e8ebe8] pt-4 text-sm font-medium">
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">Live project ↗</a>}
                {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-link">Source code ↗</a>}
              </div>}
            </article>
          ))}
        </div>
      ) : (
        <p className="border-t border-[#dfe4df] py-8 text-sm text-[#647168]">No projects match these filters.</p>
      )}
    </div>
  );
}
