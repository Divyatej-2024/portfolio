export type CertificationMetadata = {
  provider: string;
  providerTag: string;
  category: string;
  skills: string[];
  tags: string[];
  credentialId?: string;
  title?: string;
};

export type CertificationEntry = {
  id: string;
  title: string;
  provider: string;
  providerTag: string;
  category: string;
  date: string;
  credentialId?: string;
  skills: string[];
  tags: string[];
  fileName: string;
};

const PROVIDER_SKILLS = {
  microsoft: [
    'Cloud Security',
    'Identity Management',
    'Threat Protection',
    'SIEM',
    'Zero Trust'
  ],
  forage: [
    'Incident Response',
    'Threat Analysis',
    'Security Documentation',
    'Risk Assessment'
  ],
  python: [
    'Python Programming',
    'Scripting',
    'Automation',
    'Data Processing'
  ],
  development: [
    'Software Development',
    'Web Fundamentals',
    'Systems Design',
    'Secure Coding'
  ],
  networking: [
    'Routing',
    'Switching',
    'TCP/IP',
    'Network Troubleshooting'
  ],
  research: [
    'Technical Research',
    'Documentation',
    'Professional Maturity',
    'Evidence-Based Analysis'
  ]
};

const matchers: Array<{
  test: (fileName: string) => boolean;
  metadata: CertificationMetadata;
}> = [
  {
    test: (fileName) => /\bpython\b/i.test(fileName),
    metadata: {
      provider: 'Python Academy',
      providerTag: 'Python',
      category: 'Python',
      skills: PROVIDER_SKILLS.python,
      tags: ['Python', 'Programming', 'Automation', 'Data']
    }
  },
  {
    test: (fileName) => /\b(go lang|golang|go)\b/i.test(fileName),
    metadata: {
      provider: 'Programming Track',
      providerTag: 'Dev',
      category: 'Development',
      skills: PROVIDER_SKILLS.development,
      tags: ['Go', 'Development', 'Secure Coding', 'Backend']
    }
  },
  {
    test: (fileName) =>
      /\b(introduction to html|introduction to java|introduction to c)\b/i.test(
        fileName
      ),
    metadata: {
      provider: 'Foundations',
      providerTag: 'Dev',
      category: 'Development',
      skills: PROVIDER_SKILLS.development,
      tags: ['Programming', 'Foundations', 'Web', 'Software']
    }
  },
  {
    test: (fileName) =>
      /\b(microsoft learn|achievements|learner_transcript|microsoft)\b/i.test(
        fileName
      ),
    metadata: {
      provider: 'Microsoft Learn',
      providerTag: 'Microsoft',
      category: 'Cloud',
      skills: PROVIDER_SKILLS.microsoft,
      tags: ['Cloud', 'Security', 'Identity', 'Microsoft']
    }
  },
  {
    test: (fileName) =>
      /\b(jpmorgan|mastercard|hsbc|aig|anz|commonwealth bank|clifford chance|datacom|pwc|bank)\b/i.test(
        fileName
      ),
    metadata: {
      provider: 'Forage Simulation',
      providerTag: 'Forage',
      category: 'Cybersecurity',
      skills: PROVIDER_SKILLS.forage,
      tags: [
        'Cybersecurity',
        'Threat Analysis',
        'Incident Response',
        'Enterprise'
      ]
    }
  },
  {
    test: (fileName) => /\b(transcript|academic|achievement)\b/i.test(fileName),
    metadata: {
      provider: 'Academic Record',
      providerTag: 'Research',
      category: 'Research',
      skills: PROVIDER_SKILLS.research,
      tags: ['Research', 'Evidence', 'Compliance', 'Documentation']
    }
  }
];

const CATEGORY_OVERRIDES: Record<string, string> = {
  Fortinet: 'Fortinet',
  Cisco: 'Cisco',
  Forage: 'Forage',
  Python: 'Python',
  Networking: 'Networking',
  Cybersecurity: 'Cybersecurity',
  Cloud: 'Cloud',
  Research: 'Research'
};

const tidyTitle = (name: string) => {
  const trimmed = name
    .replace(/\.(pdf)$/i, '')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return trimmed
    .replace(/Achievements - pendeladivyatejstudent-9021 \s*_\s*/gi, '')
    .replace(/completion certificate/gi, 'Certificate')
    .replace(
      /Mastercard|JPMorgan Chase & Co\.|HSBC|ANZ Australia|AIG|Commonwealth Bank|Clifford Chance|Datacom/gi,
      (match) => match
    )
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b(xJSz3nStzBg8FTBLH_[0-9]+)\b/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/^-\s*/g, '');
};

export const inferCertificationMetadata = (
  fileName: string
): CertificationMetadata => {
  const normalized = fileName.toLowerCase();

  const matched = matchers.find((entry) => entry.test(normalized));

  if (matched) {
    return matched.metadata;
  }

  if (/fortinet/i.test(normalized)) {
    return {
      provider: 'Fortinet',
      providerTag: 'Fortinet',
      category: 'Fortinet',
      skills: [
        'Network Security',
        'Firewall Management',
        'Threat Protection',
        'Security Operations'
      ],
      tags: [
        'Fortinet',
        'Network Security',
        'Firewall',
        'Cybersecurity'
      ]
    };
  }

  if (/cisco/i.test(normalized)) {
    return {
      provider: 'Cisco',
      providerTag: 'Cisco',
      category: 'Cisco',
      skills: [
        'Routing',
        'Switching',
        'TCP/IP',
        'Network Troubleshooting'
      ],
      tags: ['Cisco', 'Networking', 'Routing', 'Switching']
    };
  }

  return {
    provider: 'Credentials',
    providerTag: 'Credentials',
    category: 'Cybersecurity',
    skills: [
      'Security Operations',
      'Technical Analysis',
      'Process Automation'
    ],
    tags: ['Certifications', 'Professional', 'Cybersecurity']
  };
};

export const makeCertificationEntry = (
  fileName: string,
  date: string
): CertificationEntry => {
  const metadata = inferCertificationMetadata(fileName);

  const title = metadata.title || tidyTitle(fileName);

  const category =
    CATEGORY_OVERRIDES[metadata.category] || metadata.category;

  return {
    id: fileName,
    title,
    provider: metadata.provider,
    providerTag: metadata.providerTag,
    category,
    date,
    credentialId: metadata.credentialId,
    skills: metadata.skills,
    tags: metadata.tags,
    fileName
  };
};

export const certificationsData: CertificationEntry[] = [
  makeCertificationEntry(
    'Cisco Introduction to Cybersecurity.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'JPMorgan Chase Cybersecurity Job Simulation.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'Mastercard Cybersecurity Job Simulation.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'ANZ Australia Cybersecurity Management.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'Commonwealth Bank Introduction to Cybersecurity.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'AIG Shields Up Cybersecurity.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'PwC Switzerland Cybersecurity.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'Clifford Chance Cyber Security.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'Datacom Cybersecurity Job Simulation.pdf',
    '2025'
  ),

  makeCertificationEntry(
    'Python Programming Certificate.pdf',
    '2025'
  )
];

export const CATEGORY_OPTIONS = [
  'All',
  'Fortinet',
  'Cisco',
  'Forage',
  'Python',
  'Networking',
  'Cybersecurity',
  'Cloud',
  'Research',
  'Development'
];
