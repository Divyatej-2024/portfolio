export const metadata = {
  title: 'About | Divya Tej Pendela',
  description: 'First Class Cyber Security graduate focused on SOC analysis, threat detection, and phishing analysis.',
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="section-kicker">About</p>
      <h1 className="display-face mt-4 text-5xl font-medium tracking-tight text-[#17231e] sm:text-6xl">Divya Tej Pendela</h1>
      <p className="mt-6 text-lg leading-8 text-[#34433a]">
        I’m a First Class BSc (Hons) Cyber Security graduate from Teesside University, based in the UK and actively seeking an entry-level Cyber Security Analyst or SOC Analyst role.
      </p>
      <p className="mt-4 leading-7 text-[#59665f]">
        My project work centres on phishing awareness, security event monitoring, threat detection, and network defence. I’m currently developing my SOC skills with Splunk and Microsoft Sentinel, and enjoy building software that makes security workflows clearer and more useful.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="secondary-button">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="secondary-button">LinkedIn ↗</a>
        <a href="mailto:pdivyatej2003@gmail.com" className="secondary-button">Email me ↗</a>
      </div>
    </section>
  );
}
