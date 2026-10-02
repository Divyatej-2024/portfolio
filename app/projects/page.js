import { projects } from '../../data/projects';

export const metadata = {
  title: 'Projects | Divya Tej Pendela',
  description: 'Cybersecurity, software, and research projects by Divya Tej Pendela.',
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
      <header className="mb-12 max-w-3xl border-b border-[#dfe4df] pb-8">
        <p className="section-kicker">Selected work</p>
        <h1 className="display-face mt-3 text-5xl font-medium tracking-tight text-[#17231e] sm:text-6xl">Projects</h1>
        <p className="mt-5 text-base leading-7 text-[#59665f]">{projects.length} selected projects from my public GitHub, led by security operations, phishing awareness, threat detection, and network defence. Work in progress is labelled clearly.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="flex h-full flex-col rounded-md border border-[#dfe4df] bg-white p-6 transition hover:border-[#a8b9ad]">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-[#17231e]">{project.title}</h2>
              {project.status === 'development' && <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-[#7b6650]">In progress</span>}
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
    </section>
  );
}
