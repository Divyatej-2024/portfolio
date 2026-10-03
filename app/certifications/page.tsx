import fs from 'fs';
import path from 'path';
import { CertificationDashboard } from '../../components/certifications/CertificationDashboard';
import { makeCertificationEntry } from '../../data/certifications';

export const metadata = {
  title: 'Credentials & learning • Divya Tej Pendela',
  description: 'Forage job simulations, Microsoft Learn achievements, and course certificates.',
};

export default function CertificationsPage() {
  const dir = path.join(process.cwd(), 'public', 'certifications');
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir)
        .filter((file) => file.toLowerCase().endsWith('.pdf') && !/transcript/i.test(file))
        .sort()
    : [];

  const certifications = files.map((fileName) => {
    return makeCertificationEntry(fileName);
  }).sort((a, b) => b.dateISO.localeCompare(a.dateISO));

  return (
    <section className="relative px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <CertificationDashboard certifications={certifications} />
      </div>
    </section>
  );
}
