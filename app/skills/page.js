import { skillMap } from '../../lib/skills/skill-map';

export const metadata = {
  title: 'Skills — Divya',
  description: 'Skill summary and clusters',
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {Object.entries(skillMap).map(([group, items]) => (
          <div key={group} className="rounded-md border border-white/6 bg-slate-800 p-4">
            <h3 className="font-semibold">{group}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
