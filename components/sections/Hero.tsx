'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';

const roles = [
  'Fullstack Developer',
  'Web App Builder',
  'AI Integrator',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm sm:text-base mb-4 tracking-wide">
            Halo, Saya
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          <span className="text-gradient">MHD HANAFI AKBAR</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 sm:h-12 mb-6"
        >
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan">
            {displayText}
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-cyan ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Saya membangun web dan aplikasi modern — dari landing page elegan hingga sistem AI yang powerful.
          Berbasis di Batam, siap bekerja remote maupun on-site.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="flex items-center gap-2 px-8 py-3.5 bg-cyan text-dark font-semibold rounded-full hover:bg-cyan/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            <ArrowDown size={18} />
            Lihat Proyek
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-cyan/50 transition-all duration-200"
          >
            <MessageCircle size={18} />
            Hubungi Saya
          </button>
        </motion.div>
      </div>
    </section>
  );
}
