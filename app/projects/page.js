import { projects } from '../../data/projects';

export const metadata = {
  title: 'Projects — Divya',
  description: 'Selected projects and showcases',
};

function ProjectCard({ p }) {
  return (
    <article className="rounded-md border border-white/6 bg-slate-800 p-4">
      <h3 className="font-semibold">{p.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">{t}</span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
