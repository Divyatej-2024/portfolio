export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 'phishing-detector',
    title: 'ML-Based Phishing Detector',
    description: 'Preprocessing pipeline and ML models for enterprise phishing detection, focusing on precision and deployment readiness.',
    tags: ['Python', 'ML', 'Security'],
    repo: 'https://github.com/Divyatej-2024/phishing-detector'
  },
  {
    id: 'ecommerce-mock',
    title: 'Full-Stack E-Commerce Mock',
    description: 'Secure authentication, product catalog, server-side rendering, and mock payments for security-focused storefront.',
    tags: ['Full-Stack', 'Node.js', 'Security'],
    repo: 'https://github.com/Divyatej-2024/ecommerce-mock'
  }
];
