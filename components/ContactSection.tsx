'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields = new FormData(e.currentTarget as HTMLFormElement);
    const subject = String(fields.get('subject') || 'Portfolio enquiry');
    const body = `Name: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
    window.location.href = `mailto:pdivyatej2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-[#203b30] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .3 }}>
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#bfd0c4]">Contact</p>
          <h2 className="display-face mt-4 text-4xl font-medium tracking-tight sm:text-5xl">Let’s talk about the work.</h2>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#d5ded8]">I’m seeking an entry-level Cyber Security Analyst or SOC Analyst role in the UK. For opportunities, questions about my projects, or professional connections, please get in touch.</p>
          <div className="mt-9 space-y-5 border-t border-white/20 pt-6 text-sm">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#bfd0c4]">Email</p>
              <a href="mailto:pdivyatej2003@gmail.com" className="mt-1 inline-block text-white underline decoration-white/40 hover:decoration-white">pdivyatej2003@gmail.com</a>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 hover:decoration-white">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 hover:decoration-white">LinkedIn ↗</a>
            </div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="rounded-md bg-white p-6 text-[#17231e] sm:p-8">
          <h3 className="text-xl font-semibold">Send a message</h3>
          <p className="mt-2 text-sm leading-6 text-[#647168]">This will open a new email draft in your mail app.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
              <input id="contact-name" name="name" type="text" required className="mt-2 w-full rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
              <input id="contact-email" name="email" type="email" required className="mt-2 w-full rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-subject" className="text-sm font-medium">Subject</label>
              <input id="contact-subject" name="subject" type="text" required className="mt-2 w-full rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10" placeholder="Role or opportunity" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
              <textarea id="contact-message" name="message" required rows={4} className="mt-2 w-full resize-y rounded border border-[#cfd8d1] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#285b47] focus:ring-2 focus:ring-[#285b47]/10" placeholder="How can I help?" />
            </div>
          </div>
          <button type="submit" className="primary-button mt-6">Open email draft <span aria-hidden="true">→</span></button>
        </form>
      </div>
    </section>
  );
}
