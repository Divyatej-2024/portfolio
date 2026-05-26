export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  status?: 'active' | 'pending' | 'research' | 'development';
}
