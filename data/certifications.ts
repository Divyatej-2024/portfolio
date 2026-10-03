import certificationIndex from './certification-content.json';

export type CertificationEntry = {
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
