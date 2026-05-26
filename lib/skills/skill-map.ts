export type SkillGroup = {
category: string;
description: string;
skills: string[];
};

export const skillGroups: SkillGroup[] = [
{
category: 'Cybersecurity',
description:
'Enterprise security foundations focused on infrastructure protection, identity security, defensive engineering, and secure systems.',
skills: [
'Access Management',
'Application Security',
'Cybersecurity',
'Data Privacy',
'Data Security',
'Email Security',
'Identity Management',
'Identity Management Assessment',
'Identity Management Design',
'Information Security',
'Network Security',
'Penetration Testing',
'Security Analysis',
'Security Awareness',
'Security Consulting',
'Security Engineering',
'Security Reporting',
'Security Training',
'Social Engineering',
'Threat Detection',
'Vulnerability Management',
'Web Security'
]
},

{
category: 'Threat Detection & SOC Operations',
description:
'Threat monitoring, security operations workflows, incident response, investigation, and operational cyber defense.',
skills: [
'Compliance Analysis',
'Compliance Management',
'Incident Analysis',
'Incident Management',
'Incident Response',
'Log Analysis',
'Root Cause Analysis',
'Risk Assessment',
'Risk Frameworks',
'Risk Management',
'Risk Prioritization',
'Security Monitoring',
'SIEM',
'Threat Analysis'
]
},

{
category: 'Networking & Infrastructure',
description:
'Networking technologies, infrastructure management, connectivity analysis, and enterprise communication systems.',
skills: [
'Computer Networking',
'Defense Strategy',
'DNS/DHCP',
'File Management',
'Firewall Fundamentals',
'Impact Analysis',
'IPv6 Planning',
'Network Analysis',
'Network Troubleshooting',
'Routing',
'Switching',
'TCP/IP'
]
},

{
category: 'Cloud & Security Architecture',
description:
'Cloud-oriented security architecture, secure access systems, enterprise planning, and scalable infrastructure strategy.',
skills: [
'Cloud Security',
'Data Protection',
'Policy Analysis',
'Secure Access',
'Security Planning',
'Solution Architecture',
'Strategy',
'Strategy Evaluation',
'Zero Trust'
]
},

{
category: 'Programming & Automation',
description:
'Programming, scripting, automation, machine learning, and software engineering concepts supporting cybersecurity workflows.',
skills: [
'Algorithmic Thinking',
'Automation',
'Code Debugging',
'Data Structures',
'Machine Learning',
'Programming',
'Pseudocode',
'Python Programming',
'Scripting',
'Secure Coding'
]
},

{
category: 'Software Development',
description:
'Software engineering, backend systems, APIs, SDLC workflows, testing methodologies, and web technologies.',
skills: [
'Agile Methodology',
'API Security',
'Application Development',
'Authentication Systems',
'Backend Integration',
'Open Source Development',
'SDLC',
'Software Development',
'Software Quality Assurance',
'Software Testing',
'System Design',
'Waterfall Methodology',
'Web Development',
'Web Fundamentals'
]
},

{
category: 'Research & Analytics',
description:
'Research-driven analysis, data interpretation, digital investigations, technical documentation, and evidence-based reporting.',
skills: [
'Analytical Reasoning',
'Analytical Skills',
'Comparative Analysis',
'Data Analysis',
'Data Modeling',
'Data Visualization',
'Data Visualization Tools',
'Decision Making',
'Digital Investigation',
'Documentation',
'Exploratory Data Analysis',
'Excel',
'Excel Pivot Tables',
'Formal Communication',
'Machine Learning Security Research',
'OSINT',
'Performance Analysis',
'Planning',
'Research',
'Research Skills',
'Spreadsheet Skills',
'Technical Research',
'Trend Analysis'
]
},

{
category: 'Governance, Risk & Professional Skills',
description:
'Governance frameworks, strategic communication, leadership collaboration, business operations, and professional effectiveness.',
skills: [
'Attention to Detail',
'Brainstorming',
'Business Acumen',
'Career Development',
'Clear Communication',
'Clear Writing',
'Collaboration',
'Communication',
'Concise Communication',
'Corporate Governance',
'Creative Thinking',
'Critical Thinking',
'Design Thinking',
'Document Drafting',
'Ideation',
'Industry Analysis',
'Knowledge Transfer',
'Legal Analysis',
'Legal Evaluation',
'Legal Writing',
'Organization',
'Presentation Preparation',
'Presentation Skills',
'Problem Identification',
'Problem Solving',
'Process Analysis',
'Process Management',
'Process Mapping',
'Professional Communication',
'Project Planning',
'Public Relations',
'Stakeholder Communication',
'Strategic Communication',
'Strategic Problem Solving',
'Strategic Thinking',
'Teamwork',
'Work Planning',
'Writing Skills',
'Written Communication'
]
}
];

export const getSkillCategory = (skill: string) => {
const normalized = skill.toLowerCase();

if (
/python|programming|automation|scripting|coding|machine learning|debugging|pseudocode/.test(
normalized
)
)
return 'Programming & Automation';

if ( 
/network|routing|switching|tcp\/ip|dns|dhcp|firewall|ipv6|infrastructure/ .test(
normalized
)
)
return 'Networking & Infrastructure';

if (
/cloud|zero trust|secure access|architecture|data protection|strategy/.test(
normalized
)
)
return 'Cloud & Security Architecture';

if (
/threat|incident|siem|monitoring|response|log analysis|risk|compliance|root cause/.test(
normalized
)
)
return 'Threat Detection & SOC Operations';

if (
/identity|security|penetration|vulnerability|application security|email security|web security/.test(
normalized
)
)
return 'Cybersecurity';

if (
/research|analysis|documentation|osint|investigation|visualization|excel|data/.test(
normalized
)
)
return 'Research & Analytics';

return 'Governance, Risk & Professional Skills';
};
