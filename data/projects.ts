export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  status?: 'active' | 'pending';
};

export const projects: Project[] = [
  {
    id: 'EnPhiSim',
    title: 'EnPhiSim',
    description: 'A walkthrough phishing simulator.',
    tags: ['Phishing', 'Simulator', 'JavaScript'],
    repo: 'https://github.com/Divyatej-2024/EnPhiSim',
    live: 'https://en-phi-sim.vercel.app',
    status: 'active'
  },
  {
    id: 'PipeSentinel',
    title: 'PipeSentinel',
    description: 'Pipeline security monitoring with a web dashboard.',
    tags: ['SecOps', 'JavaScript'],
    repo: 'https://github.com/Divyatej-2024/PipeSentinel',
    live: 'https://pipe-sentinel.vercel.app',
    status: 'active'
  },
  {
    id: 'aegisPhish-lab',
    title: 'Aegis Phish Lab',
    description: 'EnPhisim2.0 — phishing lab and detection tooling.',
    tags: ['Phishing', 'Security', 'TypeScript'],
    repo: 'https://github.com/Divyatej-2024/aegisPhish-lab',
    status: 'active'
  },
  {
    id: 'Phishing-Simulator',
    title: 'Phishing-Simulator',
    description: 'Phishing simulator and awareness content.',
    tags: ['Phishing', 'HTML'],
    repo: 'https://github.com/Divyatej-2024/Phishing-Simulator',
    status: 'active'
  },
  {
    id: 'CloudWaveNet',
    title: 'CloudWaveNet',
    description: 'Secure wireless branch-to-branch communication via cloud internet.',
    tags: ['Networking', 'Cloud'],
    repo: 'https://github.com/Divyatej-2024/CloudWaveNet',
    status: 'active'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Personal portfolio website (this site).',
    tags: ['Next.js', 'TypeScript'],
    repo: 'https://github.com/Divyatej-2024/portfolio',
    live: 'https://portfolio-divya-tej-pendela.vercel.app/',
    status: 'active'
  },
  {
    id: 'cyberjobs',
    title: 'CyberJobs',
    description: 'Job board for cybersecurity roles (work in progress).',
    tags: ['JavaScript', 'Jobs'],
    repo: 'https://github.com/Divyatej-2024/cyberjobs',
    status: 'active'
  },
  {
    id: 'Songs',
    title: 'Songs',
    description: 'A small site showcasing songs (personal project).',
    tags: ['HTML'],
    repo: 'https://github.com/Divyatej-2024/Songs',
    status: 'active'
  },
  {
    id: 'vulnx',
    title: 'VulnX',
    description: 'Vulnerability tooling and PoC scripts.',
    tags: ['Python'],
    repo: 'https://github.com/Divyatej-2024/vulnx',
    status: 'active'
  },
  {
    id: 'Tracker',
    title: 'Tracker',
    description: 'Small tracking app project.',
    tags: ['JavaScript'],
    repo: 'https://github.com/Divyatej-2024/Tracker',
    status: 'active'
  },
  {
    id: 'seed',
    title: 'Seed',
    description: 'Starter utilities and scripts.',
    tags: ['Python'],
    repo: 'https://github.com/Divyatej-2024/seed',
    status: 'active'
  },
  {
    id: 'I60',
    title: 'I60',
    description: 'Website for car parts and public services.',
    tags: ['HTML'],
    repo: 'https://github.com/Divyatej-2024/I60',
    status: 'active'
  },
  {
    id: 'App',
    title: 'App',
    description: 'Small application repo (minimal files).',
    tags: ['Python'],
    repo: 'https://github.com/Divyatej-2024/App',
    status: 'active'
  }
];
