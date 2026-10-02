export const metadata = {
  title: 'About | Divya Tej Pendela',
  description: 'First Class Cyber Security graduate focused on SOC analysis, threat detection, and phishing analysis.',
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Divya Tej Pendela</h1>
      <p className="mt-6 text-lg leading-8 text-slate-300">
        I’m a First Class BSc (Hons) Cyber Security graduate from Teesside University, based in the UK and actively seeking an entry-level Cyber Security Analyst or SOC Analyst role.
      </p>
      <p className="mt-4 leading-7 text-slate-400">
        My project work centres on phishing awareness, security event monitoring, threat detection, and network defence. I’m currently developing my SOC skills with Splunk and Microsoft Sentinel, and enjoy building software that makes security workflows clearer and more useful.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200">LinkedIn ↗</a>
        <a href="mailto:pdivyatej2003@gmail.com" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200">Email me ↗</a>
      </div>
    </section>
  );
}
