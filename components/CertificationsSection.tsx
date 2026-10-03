import { badges, certificates } from '@/data/certifications';

export default function CertificationsSection() {
  const featuredCertificates = certificates.slice(0, 4);
  const featuredBadges = badges.filter((badge) => /sentinel|defender xdr/i.test(badge.title)).slice(0, 2);

  return (
    <section id="certifications" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-[#dfe4df] pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Professional development</p>
            <h2 className="section-heading mt-3">Certificates & badges</h2>
          </div>
          <p className="max-w-lg text-[15px] leading-7 text-[#59665f]">Course and job simulation certificates, presented separately from Microsoft Learn achievement badges.</p>
        </header>
        <div className="grid gap-12 lg:grid-cols-2">
          <section aria-labelledby="home-certificates-heading">
            <h3 id="home-certificates-heading" className="mb-3 text-lg font-semibold text-[#17231e]">Certificates</h3>
            {featuredCertificates.map((cert) => (
              <article key={cert.id} className="border-t border-[#dfe4df] py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6a766f]">{cert.provider} <span className="px-1 text-[#a7b0aa]">·</span> {cert.date}</p>
                <h4 className="mt-2 text-base font-semibold leading-snug text-[#17231e]">{cert.title}</h4>
              </article>
            ))}
          </section>
          <section aria-labelledby="home-badges-heading">
            <h3 id="home-badges-heading" className="mb-3 text-lg font-semibold text-[#17231e]">Microsoft Learn badges</h3>
            {featuredBadges.map((badge) => (
              <article key={badge.id} className="border-t border-[#dfe4df] py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6a766f]">{badge.provider} <span className="px-1 text-[#a7b0aa]">·</span> {badge.date}</p>
                <h4 className="mt-2 text-base font-semibold leading-snug text-[#17231e]">{badge.title}</h4>
              </article>
            ))}
          </section>
        </div>
        <a href="/certifications" className="text-link mt-8 inline-block text-sm">Browse certificates & badges <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}
