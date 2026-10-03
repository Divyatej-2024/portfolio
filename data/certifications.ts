import certificationIndex from './certification-content.json';

export type CertificationEntry = {
  kind: 'certificate' | 'badge';
  id: string;
  title: string;
  provider: string;
  providerTag: string;
  category: string;
  date: string;
  dateISO: string;
  credentialId?: string;
  skills: string[];
  tags: string[];
  fileName: string;
};

// Titles, issuers, and award dates are indexed from the PDF contents. Sort newest first
// so the home page leads with recent work, not arbitrary filename order.
export const certificationsData = (certificationIndex as CertificationEntry[])
  .map((entry) => ({ ...entry, credentialId: entry.credentialId || undefined }))
  .sort((a, b) => b.dateISO.localeCompare(a.dateISO));

export const makeCertificationEntry = (fileName: string): CertificationEntry => {
  const indexedEntry = certificationsData.find((entry) => entry.fileName === fileName);
  if (indexedEntry) return indexedEntry;

  // Do not turn opaque export filenames or file timestamps into misleading credentials.
  return {
    kind: 'certificate',
    id: fileName,
    fileName,
    title: 'Credential details not indexed',
    provider: 'Issuer not identified',
    providerTag: 'Credential',
    category: 'Credential',
    date: 'Date not listed',
    dateISO: '',
    skills: [],
    tags: [],
  };
};

export const CATEGORY_OPTIONS = [
  'All',
  ...new Set(certificationsData.map((certificate) => certificate.category)),
];

export const certificates = certificationsData.filter((entry) => entry.kind === 'certificate');
export const badges = certificationsData.filter((entry) => entry.kind === 'badge');
