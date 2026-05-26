export const metadata = {
  title: 'About — Divya',
  description: 'About Divya Tej Pendela — background and goals',
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-slate-300">
        I'm Divya, a Cybersecurity (BSc) student based in Middlesbrough, focused on threat detection, phishing analysis, and security automation. I have hands-on experience building detection pipelines and participating in SOC exercises.
      </p>
      <p className="mt-4 text-slate-300">
        Education: Teesside University. Previous coursework and training include Noroff modules. I contribute to open-source projects and maintain security-focused tooling on GitHub.
      </p>
      <p className="mt-4 text-slate-300">
        Links: <a href="https://github.com/Divyatej-2024" className="text-sky-400 hover:underline">GitHub</a> • <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" className="text-sky-400 hover:underline">LinkedIn</a>
      </p>
    </section>
  );
}
