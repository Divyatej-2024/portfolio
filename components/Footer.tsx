export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dfe4df] bg-[#f7f7f4] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-[#17231e]">Divya Tej Pendela</p>
          <p className="mt-1 text-xs text-[#69756e]">Cyber Security Graduate · SOC Analyst Candidate</p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2 text-[#536158]">
          <a href="/#projects" className="hover:text-[#285b47]">Projects</a>
          <a href="/#certifications" className="hover:text-[#285b47]">Credentials</a>
          <a href="https://github.com/Divyatej-2024" target="_blank" rel="noopener noreferrer" className="hover:text-[#285b47]">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/" target="_blank" rel="noopener noreferrer" className="hover:text-[#285b47]">LinkedIn ↗</a>
        </nav>
        <p className="text-xs text-[#69756e]">© {currentYear} Divya Tej Pendela</p>
      </div>
    </footer>
  );
}
