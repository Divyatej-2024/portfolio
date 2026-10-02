'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const highlights = [
    { label: 'Degree', value: 'BSc (Hons) Cyber Security' },
    { label: 'Result', value: 'First Class' },
    { label: 'University', value: 'Teesside University · 2026' },
    { label: 'Currently learning', value: 'Splunk · Microsoft Sentinel' },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-y border-[#e2e6e2] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-24">
        <div>
          <p className="section-kicker">Profile</p>
          <h2 className="section-heading mt-4 max-w-2xl">Security-minded, practical, and ready to contribute.</h2>
          <p className="body-copy mt-6 max-w-2xl">
            I recently graduated with First Class honours from Teesside University. My project work focuses on phishing analysis, security event monitoring, and network defence. I enjoy learning by building tools and explaining how they work.
          </p>

          <div className="mt-9">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#536158]">Areas of focus</h3>
            <ul className="mt-4 grid gap-x-8 gap-y-3 text-[15px] text-[#34433a] sm:grid-cols-2">
              <li>SOC workflows and event monitoring</li>
              <li>Threat detection and alert investigation</li>
              <li>Phishing analysis and user awareness</li>
              <li>Network defence and IPsec VPNs</li>
              <li>Python and web tools for security</li>
              <li>Splunk and Sentinel — currently learning</li>
            </ul>
          </div>

          <div className="mt-9 border-l-2 border-[#285b47] pl-5">
            <p className="text-sm font-semibold text-[#17231e]">Open to entry-level Cyber Security Analyst and SOC Analyst roles in the UK.</p>
            <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="text-link mt-2 inline-block text-sm">LinkedIn profile and recent graduation update ↗</a>
          </div>
        </div>

        <dl className="self-start border-y border-[#dfe4df]">
          {highlights.map((item) => (
            <div key={item.label} className="grid grid-cols-[minmax(120px,.7fr)_1.3fr] gap-4 border-b border-[#e8ebe8] py-5 last:border-0">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6a766f]">{item.label}</dt>
              <dd className="text-sm font-medium text-[#24332a]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
