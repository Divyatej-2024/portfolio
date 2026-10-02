import { skillsData } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-[#e2e6e2] bg-[#f0f2ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <p className="section-kicker">Technical profile</p>
          <h2 className="section-heading mt-3">Skills & tools</h2>
          <p className="mt-4 text-[15px] leading-7 text-[#59665f]">Technologies used in my projects, alongside security tools I’m currently learning.</p>
        </header>
        <dl className="grid gap-x-12 md:grid-cols-2">
          {skillsData.map((group) => (
            <div key={group.category} className="border-t border-[#cfd8d1] py-5">
              <dt className="text-sm font-semibold text-[#17231e]">{group.category}</dt>
              <dd className="mt-2 text-sm leading-6 text-[#59665f]">{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
