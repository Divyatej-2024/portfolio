export const metadata = {
  title: 'Contact — Divya',
  description: 'Contact and links',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-slate-300">Email: hello@example.com</p>
      <p className="mt-2 text-slate-300">LinkedIn: <a href="#" className="text-sky-400">linkedin.com/in/divya</a></p>
    </section>
  );
}
