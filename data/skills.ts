import { Skill } from '@/lib/types';

export const skillsData: Skill[] = [
  {
    category: 'Security focus',
    items: ['SOC workflows', 'Threat detection', 'Phishing analysis', 'Security awareness', 'Network defence', 'Incident response'],
  },
  {
    category: 'SIEM learning',
    items: ['Splunk (currently learning)', 'Microsoft Sentinel (currently learning)', 'Log analysis', 'Alert investigation'],
  },
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'Go', 'HTML & CSS'],
  },
  {
    category: 'Frameworks & services',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    category: 'Data & infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Docker', 'Cisco Packet Tracer', 'IPsec VPN'],
  },
];
