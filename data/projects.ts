export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  status: 'active' | 'pending' | 'research' | 'development';
};

// Projects verified against the public GitHub profile and repository READMEs.
export const projects: Project[] = [
  {
    id: 'aegisPhish-lab',
    title: 'Aegis Phish Lab',
    description: 'A phishing awareness and human attack surface training platform. The public README describes a Next.js frontend, Go API, PostgreSQL data layer, campaign workflows, role-based access, and deployment infrastructure.',
    tags: ['Phishing Awareness', 'Next.js', 'Go', 'PostgreSQL', 'Security Training'],
    repo: 'https://github.com/Divyatej-2024/aegisPhish-lab',
    status: 'active',
  },
  {
    id: 'EnPhiSim',
    title: 'EnPhiSim',
    description: 'A walkthrough phishing simulator combining level-based awareness scenarios with a machine-learning text classifier. Its documented architecture connects a React frontend, Node/Express and MongoDB backend, and FastAPI inference service.',
    tags: ['Phishing', 'React', 'Python', 'FastAPI', 'Machine Learning'],
    repo: 'https://github.com/Divyatej-2024/EnPhiSim',
    live: 'https://en-phi-sim.vercel.app',
    status: 'active',
  },
  {
    id: 'PipeSentinel',
    title: 'PipeSentinel SOC Dashboard',
    description: 'A security event monitoring and triage project. The README documents authenticated event ingestion, detection and risk scoring, PostgreSQL-backed alerts, analytics, and live dashboard updates.',
    tags: ['SOC', 'Threat Detection', 'PostgreSQL', 'Socket.IO', 'Monitoring'],
    repo: 'https://github.com/Divyatej-2024/PipeSentinel',
    live: 'https://pipe-sentinel.vercel.app',
    status: 'active',
  },
  {
    id: 'CloudWaveNet',
    title: 'CloudWaveNET',
    description: 'A Cisco Packet Tracer branch-network simulation documenting wireless LANs, routing, NAT, addressing, and a site-to-site IPsec VPN, with topology diagrams and configuration notes.',
    tags: ['Networking', 'Cisco Packet Tracer', 'IPsec VPN', 'Routing', 'Cloud'],
    repo: 'https://github.com/Divyatej-2024/CloudWaveNet',
    status: 'active',
  },
  {
    id: 'cyberhire-ai',
    title: 'CyberHire AI',
    description: 'An in-progress, candidate-side job search platform for cybersecurity applicants, covering job discovery, application tracking, CV support, interview practice, and skills planning.',
    tags: ['Cybersecurity Careers', 'Next.js', 'TypeScript', 'PostgreSQL', 'AI'],
    repo: 'https://github.com/Divyatej-2024/cyberhire-ai',
    status: 'development',
  },
  {
    id: 'Tracker',
    title: 'Job Application Tracker',
    description: 'A candidate-side workspace for managing a job search, with application tracking, CV tools, interview preparation, recruiter contacts, analytics, and authentication. The repository includes deployment and security setup notes.',
    tags: ['JavaScript', 'Job Search', 'Application Tracking', 'Security'],
    repo: 'https://github.com/Divyatej-2024/Tracker',
    status: 'active',
  },
  {
    id: 'Phishing-Simulator',
    title: 'Phishing Training Lab',
    description: 'A full-stack phishing training lab repository with a Node.js and Express backend, MongoDB persistence, request validation, and security middleware.',
    tags: ['Phishing', 'Node.js', 'Express', 'MongoDB', 'Security Training'],
    repo: 'https://github.com/Divyatej-2024/Phishing-Simulator',
    status: 'development',
  },
  {
    id: 'cybersecurity-awareness',
    title: 'Cybersecurity Awareness Quiz',
    description: 'A small browser-based security awareness quiz built with HTML, CSS, and JavaScript.',
    tags: ['Security Awareness', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/Divyatej-2024/cybersecurity-awareness',
    status: 'active',
  },
  {
    id: 'applicationmoneytracker',
    title: 'Personal Money Tracker',
    description: 'An offline-friendly personal finance web app for transactions, spending summaries, savings goals, and weekly progress. The repository README describes local storage and progressive web app support.',
    tags: ['JavaScript', 'PWA', 'Local Storage', 'Personal Project'],
    repo: 'https://github.com/Divyatej-2024/applicationmoneytracker',
    status: 'active',
  },
  {
    id: 'Songs',
    title: 'Songs — Personal Music Links',
    description: 'A small HTML and CSS project for organising music links. You also shared this personal project on LinkedIn as an example of learning by building.',
    tags: ['HTML', 'CSS', 'GitHub Pages', 'Personal Project'],
    repo: 'https://github.com/Divyatej-2024/Songs',
    live: 'https://divyatej-2024.github.io/Songs/',
    status: 'active',
  },
];
