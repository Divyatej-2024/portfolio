'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#f7f7f4]/95 transition-all duration-300 ${scrolled ? 'border-b border-[#dfe4df]' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center gap-3 transition hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center border border-[#9bac9f] font-serif text-sm font-semibold text-[#285b47]">
            DP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-[#17231e]">Divya Tej Pendela</span>
            <span className="mt-1 hidden text-[11px] text-[#647168] sm:block">Cyber Security · SOC Analysis</span>
          </div>
        </a>

        <nav aria-label="Main navigation" className="hidden gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[13px] font-medium text-[#4f5d55] hover:text-[#285b47]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Link
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="rounded border border-[#bdc9c0] px-3.5 py-2 text-[13px] font-semibold text-[#285b47] hover:border-[#285b47]"
        >
          Contact
        </Link>
      </div>
      <nav aria-label="Mobile navigation" className="flex gap-6 overflow-x-auto border-t border-[#e5e8e5] px-5 py-3 md:hidden">
        {navLinks.map((link) => (
          <button key={link.href} onClick={() => handleNavClick(link.href)} className="shrink-0 text-xs font-medium text-[#536158] hover:text-[#285b47]">
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
