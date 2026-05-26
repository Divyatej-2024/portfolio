import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-white/6 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-slate-900">DT</div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-semibold">Divya Tej Pendela</span>
            <span className="text-xs text-slate-400">Cybersecurity • Software • ML</span>
          </div>
        </Link>

        <nav className="hidden gap-4 md:flex">
          <Link href="/about" className="text-sm text-slate-300 hover:text-white">About</Link>
          <Link href="/projects" className="text-sm text-slate-300 hover:text-white">Projects</Link>
          <Link href="/skills" className="text-sm text-slate-300 hover:text-white">Skills</Link>
          <Link href="/certifications" className="text-sm text-slate-300 hover:text-white">Certifications</Link>
          <Link href="/contact" className="text-sm text-slate-300 hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
