export const metadata = {
  title: 'About — Divya',
  description: 'About Divya Tej Pendela — background and goals',
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-slate-300">
        I'm Divya, a cybersecurity and software engineering student focused on applying machine learning and secure development practices to real-world problems.
      </p>
      <p className="mt-4 text-slate-300">
        I build tools, participate in CTFs, and contribute to open-source projects.
      </p>
    </section>
  );
}
