import { projects } from '../../data/projects';

export const metadata = {
  title: 'Projects | Divya Tej Pendela',
  description: 'Cybersecurity, software, and research projects by Divya Tej Pendela.',
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Selected work</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Projects & experiments</h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">{projects.length} selected projects from my public GitHub, led by security operations, phishing awareness, threat detection, and network defence. Work in progress is labelled clearly.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-300/30">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
              {project.status && <span className="shrink-0 rounded-full border border-white/10 bg-slate-950 px-2.5 py-1 text-[11px] capitalize text-slate-300">{project.status}</span>}
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}
            </div>
            {(project.live || project.repo) && <div className="mt-6 flex gap-4 border-t border-white/10 pt-4 text-sm font-medium">
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Live demo ↗</a>}
              {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">Source code ↗</a>}
            </div>}
          </article>
        ))}
      </div>
    </section>
  );
}
