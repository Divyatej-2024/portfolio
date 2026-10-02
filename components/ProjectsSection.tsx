import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-[#dfe4df] pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-heading mt-3">Projects</h2>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-[#59665f]">Practical work in security operations, phishing awareness, threat detection, and network defence.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <article key={project.id} className="group flex min-h-[270px] flex-col rounded-md border border-[#dfe4df] bg-white p-6 transition hover:border-[#a8b9ad]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#285b47]">{String(index + 1).padStart(2, '0')} · {project.tags[0]}</span>
                {project.status === 'development' && <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7b6650]">In progress</span>}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#17231e]">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#5b675f]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-[#e8ebe8] pt-4">
                {project.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="mt-5 flex gap-5 text-sm">
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">Live project ↗</a>}
                {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-link">Source code ↗</a>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9">
          <a href="/projects" className="text-link text-sm">View all projects <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
