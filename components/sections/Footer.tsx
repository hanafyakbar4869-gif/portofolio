'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-2xl font-bold text-cyan mb-3">DevStudio</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Digital Products That Work.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-gray-400 text-sm hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4 md:justify-end">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan hover:border-cyan/30 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan hover:border-cyan/30 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan hover:border-cyan/30 transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 MHD HANAFI AKBAR. Built with Next.js &amp; love.
          </p>
        </div>
      </div>
    </footer>
  );
}
