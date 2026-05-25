export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cybersecurity',
    description: 'Core defensive and enterprise protection capabilities',
    skills: ['Network Security', 'Threat Protection', 'Identity Management', 'Data Security']
  },
  {
    category: 'Threat Detection',
    description: 'Tools and processes for detection and incident response',
    skills: ['SIEM', 'Threat Analysis', 'Incident Response', 'Security Monitoring']
  },
  {
    category: 'Networking',
    description: 'Connectivity, routing, and infrastructure assurance',
    skills: ['Routing', 'Switching', 'TCP/IP', 'Network Troubleshooting']
  },
  {
    category: 'Cloud Security',
    description: 'Cloud architecture and secure delivery for modern workloads',
    skills: ['Cloud Security', 'Data Protection', 'Zero Trust', 'Secure Access']
  },
  {
    category: 'Security Operations',
    description: 'Operational maturity and security governance',
    skills: ['SecOps', 'Policy Automation', 'Vulnerability Management', 'Compliance']
  },
  {
    category: 'Programming',
    description: 'Language proficiency and automation for modern security workflows',
    skills: ['Python Programming', 'Scripting', 'Automation', 'Secure Coding']
  },
  {
    category: 'Development',
    description: 'Software foundations and systems design for enterprise apps',
    skills: ['Software Development', 'Web Fundamentals', 'System Design', 'API Security']
  },
  {
    category: 'Research',
    description: 'Evidence-driven investigation and technical documentation',
    skills: ['Technical Research', 'Documentation', 'Performance Analysis', 'Security Planning']
  }
];

export const getSkillCategory = (skill: string) => {
  const normalized = skill.toLowerCase();
  if (/python|programming|scripting|automation|coding/.test(normalized)) return 'Programming';
  if (/network|routing|switching|tcp\/ip|infrastructure/.test(normalized)) return 'Networking';
  if (/cloud|zero trust|data protection|access/.test(normalized)) return 'Cloud Security';
  if (/siem|threat|incident|monitoring|response/.test(normalized)) return 'Threat Detection';
  if (/policy|compliance|ops|governance|vulnerability/.test(normalized)) return 'Security Operations';
  if (/identity|firewall|security|threat protection|data security/.test(normalized)) return 'Cybersecurity';
  if (/research|documentation|analysis|planning/.test(normalized)) return 'Research';
  return 'Development';
};
