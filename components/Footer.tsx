export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Divya Tej Pendela</h3>
            <p className="mt-2 text-sm text-slate-400">Cybersecurity Engineer • Security Researcher • Software Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="transition hover:text-cyan-400">Home</a></li>
              <li><a href="#projects" className="transition hover:text-cyan-400">Projects</a></li>
              <li><a href="#skills" className="transition hover:text-cyan-400">Skills</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Connect</h4>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Divyatej-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>
              <a
                href="mailto:pdivyatej2003@gmail.com"
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>© {currentYear} Divya Tej Pendela. All rights reserved. • Designed with precision</p>
        </div>
      </div>
    </footer>
  );
}
