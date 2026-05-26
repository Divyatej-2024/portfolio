import fs from 'fs';
import path from 'path';
import { CertificationDashboard } from '../../components/certifications/CertificationDashboard';
import { makeCertificationEntry } from '../../data/certifications';

export const metadata = {
  title: 'Certifications • Divya Tej Pendela',
  description: 'Interactive cybersecurity certification dashboard showcasing all certificates and skills.',
};

// Lines 12-21: This reads ALL PDF files from public/certifications folder
export default function CertificationsPage() {
  const dir = path.join(process.cwd(), 'public', 'certifications');
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir)
        .filter((file) => file.toLowerCase().endsWith('.pdf'))  // ✅ Loads ALL PDFs
        .sort()
    : [];

  const certifications = files.map((fileName) => {
    const stat = fs.statSync(path.join(dir, fileName));
    const date = new Date(stat.mtime).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    return makeCertificationEntry(fileName, date);  // ✅ Creates entry for EACH file
  });

  return (
    <main className="relative py-12 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <CertificationDashboard certifications={certifications} />
      </div>
    </main>
  );
}
