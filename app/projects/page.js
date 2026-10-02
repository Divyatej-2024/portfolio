import { projects } from '../../data/projects';
import { ProjectDashboard } from '../../components/projects/ProjectDashboard';

export const metadata = {
  title: 'Projects | Divya Tej Pendela',
  description: 'Cybersecurity, software, and research projects by Divya Tej Pendela.',
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-12">
      <ProjectDashboard projects={projects} />
    </section>
  );
}
