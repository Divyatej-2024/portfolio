import { skillsData } from '../../data/skills';

export const metadata = {
  title: 'Skills | Divya Tej Pendela',
  description: 'Project-backed skills and current learning in cybersecurity and software development.',
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
      <header className="mb-12 max-w-3xl border-b border-[#dfe4df] pb-8">
        <p className="section-kicker">Technical profile</p>
        <h1 className="display-face mt-3 text-5xl font-medium tracking-tight text-[#17231e] sm:text-6xl">Skills & tools</h1>
        <p className="mt-5 text-base leading-7 text-[#59665f]">A snapshot of technologies used across my projects and the security tools I’m currently learning.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group) => (
          <article key={group.category} className="rounded-md border border-[#dfe4df] bg-white p-6">
            <h2 className="text-base font-semibold text-[#17231e]">{group.category}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => <li key={skill} className="tag">{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
