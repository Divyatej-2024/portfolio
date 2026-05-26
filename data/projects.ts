export type Project = {
id: string;
title: string;
description: string;
tags: string[];
repo?: string;
live?: string;
status?: 'active' | 'pending' | 'research' | 'development';
};

export const projects: Project[] = [
{
id: 'EnPhiSim',
title: 'EnPhiSim',
description:
'Interactive phishing awareness and simulation platform designed to demonstrate phishing attack techniques, user awareness workflows, and secure email analysis.',
tags: [
'Cybersecurity',
'Phishing',
'Security Awareness',
'JavaScript',
'Threat Detection'
],
repo: 'https://github.com/Divyatej-2024/EnPhiSim',
live: 'https://en-phi-sim.vercel.app',
status: 'active'
},

{
id: 'aegisPhish-lab',
title: 'Aegis Phish Lab',
description:
'Advanced phishing detection and cybersecurity research lab focused on phishing simulations, detection workflows, and security tooling experimentation.',
tags: [
'Cybersecurity',
'Phishing Detection',
'Threat Analysis',
'TypeScript',
'Research'
],
repo: 'https://github.com/Divyatej-2024/aegisPhish-lab',
status: 'active'
},

{
id: 'PipeSentinel',
title: 'PipeSentinel',
description:
'Pipeline security monitoring platform with operational dashboards, monitoring workflows, and security event visibility for infrastructure environments.',
tags: [
'Security Operations',
'SecOps',
'Monitoring',
'Dashboard',
'JavaScript'
],
repo: 'https://github.com/Divyatej-2024/PipeSentinel',
live: 'https://pipe-sentinel.vercel.app',
status: 'active'
},

{
id: 'Phishing-Simulator',
title: 'Phishing Simulator',
description:
'Cybersecurity awareness platform focused on phishing simulations, attack education, and user-focused security awareness training.',
tags: [
'Phishing',
'Security Awareness',
'HTML',
'Cybersecurity'
],
repo: 'https://github.com/Divyatej-2024/Phishing-Simulator',
status: 'active'
},

{
id: 'ML-EmailSecurity-Research',
title: 'ML Email Security Research',
description:
'Machine learning-based phishing and email security research project developed during the British Applied College and Teesside University remote research collaboration using Random Forest and SVM models.',
tags: [
'Machine Learning',
'Email Security',
'Phishing Detection',
'Research',
'Python',
'Cybersecurity'
],
status: 'research'
},

{
id: 'CyberEscapeRoom',
title: 'Dubai Cyber Escape Room',
description:
'International collaboration project with Noroff and Teesside University focused on cybersecurity-themed interactive escape room experiences with backend authentication and database integration.',
tags: [
'Cybersecurity',
'Backend Development',
'Authentication',
'Database',
'Team Collaboration'
],
status: 'active'
},

{
id: 'CloudWaveNet',
title: 'CloudWaveNet',
description:
'Secure branch-to-branch communication architecture leveraging cloud networking concepts, secure connectivity, and infrastructure planning.',
tags: [
'Networking',
'Cloud Security',
'Infrastructure',
'TCP/IP',
'Network Security'
],
repo: 'https://github.com/Divyatej-2024/CloudWaveNet',
status: 'active'
},

{
id: 'IPv6-DataCentre-Architecture',
title: 'IPv6 Data Centre Architecture',
description:
'Academic infrastructure design project focused on IPv6 subnetting, VLAN segmentation, enterprise routing, and secure data centre network architecture.',
tags: [
'IPv6',
'Networking',
'VLAN',
'Infrastructure',
'Cybersecurity'
],
status: 'active'
},

{
id: 'Secure-ECommerce-Platform',
title: 'Secure E-Commerce Platform',
description:
'Full-stack mock e-commerce platform featuring secure authentication, dynamic product management, shopping cart functionality, and database integration.',
tags: [
'Web Development',
'JavaScript',
'Database',
'Authentication',
'Software Development'
],
status: 'active'
},

{
id: 'portfolio',
title: 'Cybersecurity Portfolio',
description:
'Modern recruiter-focused cybersecurity portfolio built with Next.js, TypeScript, Tailwind CSS, and advanced certification management integration.',
tags: [
'Next.js',
'TypeScript',
'Tailwind CSS',
'Portfolio',
'UI/UX'
],
repo: 'https://github.com/Divyatej-2024/portfolio',
live: 'https://portfolio-divya-tej-pendela.vercel.app/',
status: 'active'
},

{
id: 'cyberjobs',
title: 'CyberJobs',
description:
'Cybersecurity-focused job platform for discovering graduate security, SOC analyst, and cloud security opportunities.',
tags: [
'Job Platform',
'JavaScript',
'Web Application',
'Cybersecurity'
],
repo: 'https://github.com/Divyatej-2024/cyberjobs',
status: 'development'
},

{
id: 'vulnx',
title: 'VulnX',
description:
'Security tooling repository containing vulnerability testing scripts, proof-of-concept experiments, and cybersecurity automation utilities.',
tags: [
'Python',
'Cybersecurity',
'Security Tools',
'Automation'
],
repo: 'https://github.com/Divyatej-2024/vulnx',
status: 'active'
},

{
id: 'Security-Labs',
title: 'Security Labs',
description:
'Collection of cybersecurity practical labs covering log analysis, network analysis, OSINT investigations, phishing simulations, and incident response exercises.',
tags: [
'Cybersecurity',
'Incident Response',
'OSINT',
'Log Analysis',
'Threat Detection'
],
status: 'development'
},

{
id: 'SOC-Lab',
title: 'SOC Operations Lab',
description:
'Planned home SOC environment for SIEM monitoring, log analysis, alert investigation, and threat detection workflow simulation.',
tags: [
'SOC',
'SIEM',
'Threat Detection',
'Wazuh',
'Security Operations'
],
status: 'pending'
},

{
id: 'Cloud-Security-Lab',
title: 'Cloud Security Lab',
description:
'Upcoming cloud security experimentation project focused on Azure security controls, IAM policies, and secure cloud architecture practices.',
tags: [
'Cloud Security',
'Azure',
'IAM',
'Security Architecture'
],
status: 'pending'
},

{
id: 'Packet-Analysis-Lab',
title: 'Packet Analysis Lab',
description:
'Networking and packet inspection project utilizing Wireshark and network traffic analysis for security investigations and protocol analysis.',
tags: [
'Wireshark',
'Networking',
'Packet Analysis',
'Cybersecurity'
],
status: 'development'
}
];
