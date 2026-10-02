import { skillsData } from '../../data/skills';
import { SkillsDashboard } from '../../components/skills/SkillsDashboard';

export const metadata = {
  title: 'Skills | Divya Tej Pendela',
  description: 'Cybersecurity, software, and infrastructure skills, grouped by area.',
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-12">
      <SkillsDashboard groups={skillsData} />
    </section>
  );
}
