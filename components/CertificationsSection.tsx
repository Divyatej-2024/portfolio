import { certificationsData } from '@/data/certifications';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-[#dfe4df] pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Professional development</p>
            <h2 className="section-heading mt-3">Credentials & training</h2>
          </div>
          <p className="max-w-lg text-[15px] leading-7 text-[#59665f]">Selected certificates and job simulations, alongside my First Class degree in Cyber Security.</p>
        </header>
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.slice(0, 6).map((cert) => (
            <article key={cert.id} className="border-b border-[#dfe4df] py-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6a766f]">{cert.provider} <span className="px-1 text-[#a7b0aa]">·</span> {cert.date}</p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-[#17231e]">{cert.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cert.tags.slice(0, 2).map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <a href="/certifications" className="text-link mt-8 inline-block text-sm">Browse all credentials <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}
