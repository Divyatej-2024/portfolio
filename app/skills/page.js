import { skillsData } from '../../data/skills';

export const metadata = {
  title: 'Skills | Divya Tej Pendela',
  description: 'Project-backed skills and current learning in cybersecurity and software development.',
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Skills in practice</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Tools & focus areas</h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">A snapshot of technologies used across my projects and the security tools I’m currently learning.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group) => (
          <article key={group.category} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-cyan-200">{group.category}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => <li key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300">{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
