'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwitcher';

import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navbar');

  const navLinks = [
    { label: t('profil'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('work'), href: '#work' },
    { label: t('contact'), href: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      const elements = sections
        .map((id) => document.getElementById(id))
        .filter((el) => el !== null) as HTMLElement[];

      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20;

      if (isAtBottom && elements.length > 0) {
        const lowestElement = elements.reduce((prev, current) => {
          return prev.getBoundingClientRect().top >= current.getBoundingClientRect().top
            ? prev
            : current;
        });
        setActiveSection(lowestElement.id);
        return;
      }

      const activeElements = elements.filter(
        (el) => el.getBoundingClientRect().top <= 120
      );

      if (activeElements.length > 0) {
        const currentElement = activeElements.reduce((prev, current) => {
          return prev.getBoundingClientRect().top >= current.getBoundingClientRect().top
            ? prev
            : current;
        });
        setActiveSection(currentElement.id);
      } else {
        setActiveSection('');
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b-2 border-on-surface shadow-[4px_4px_0px_#1d1a23]">
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-headline-md text-headline-md font-black text-on-surface hover:scale-105 hover:text-primary transition-transform"
            style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <Image src="/images/logo.svg" alt="KulaiTach" width={48} height={48} />
            KulaiTach
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`font-label-bold text-label-bold transition-all hover:scale-105 hover:text-primary active:translate-x-[2px] active:translate-y-[2px] ${
                    isActive
                      ? 'text-primary font-bold relative after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-1 after:bg-secondary-container'
                      : 'text-on-surface nav-link'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Trailing Action */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            {/* NOTE: Update the wa.me link with your actual number */}
            <a
              href="https://wa.me/6281234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="candy-button hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-full border-2 border-on-surface shadow-pop hover:shadow-pop-sm"
            >
              {t('hireMe')}
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-on-surface bg-surface-container rounded-full border-2 border-on-surface shadow-pop-sm candy-button flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full z-40 bg-surface border-b-2 border-on-surface shadow-pop md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="font-label-bold text-label-bold text-on-surface p-4 bg-surface-container-low rounded-xl border-2 border-on-surface shadow-pop-sm candy-button"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="candy-button w-full text-center bg-primary text-on-primary font-label-bold text-label-bold px-6 py-4 rounded-xl border-2 border-on-surface shadow-pop-sm mt-2"
              >
                {t('hireMeViaWa')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
