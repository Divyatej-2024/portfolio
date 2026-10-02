export const metadata = {
  title: 'Contact | Divya Tej Pendela',
  description: 'Contact Divya Tej Pendela about early-career cybersecurity opportunities.',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="section-kicker">Contact</p>
      <h1 className="display-face mt-3 text-5xl font-medium text-[#17231e] sm:text-6xl">Get in touch</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-[#59665f]">I’m seeking an entry-level Cyber Security Analyst or SOC Analyst role in the UK. I’d be glad to hear about relevant opportunities and professional connections.</p>
      <div className="mt-8 border-y border-[#dfe4df] py-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6a766f]">Email</p>
        <a href="mailto:pdivyatej2003@gmail.com" className="text-link mt-2 inline-block">pdivyatej2003@gmail.com ↗</a>
      </div>
      <div className="mt-6 flex gap-6 text-sm">
        <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn ↗</a>
        <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="text-link">GitHub ↗</a>
      </div>
    </section>
  );
}
