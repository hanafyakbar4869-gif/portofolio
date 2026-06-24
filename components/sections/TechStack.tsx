'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Atom,
  FileType,
  FileCode,
  Palette,
  Coffee,
  Database,
  Server,
  GitBranch,
  Github,
  Figma,
  Cloud,
  Braces,
  Layers,
  Wind,
  Terminal,
} from 'lucide-react';

const techs = [
  { icon: Atom, label: 'React' },
  { icon: Layers, label: 'Next.js' },
  { icon: Braces, label: 'TypeScript' },
  { icon: FileCode, label: 'JavaScript' },
  { icon: Code2, label: 'HTML5' },
  { icon: Palette, label: 'CSS3' },
  { icon: Wind, label: 'Tailwind CSS' },
  { icon: Coffee, label: 'Java' },
  { icon: Terminal, label: 'Python' },
  { icon: Database, label: 'MySQL' },
  { icon: Server, label: 'PostgreSQL' },
  { icon: Cloud, label: 'REST API' },
  { icon: GitBranch, label: 'Git' },
  { icon: Github, label: 'GitHub' },
  { icon: FileType, label: 'VS Code' },
  { icon: Figma, label: 'Figma' },
  { icon: Cloud, label: 'Vercel' },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const doubled = [...techs, ...techs];

  return (
    <section id="tech" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Teknologi</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Tools & bahasa yang saya gunakan</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {doubled.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.label}-${i}`}
                  className="inline-flex items-center gap-3 mx-3 px-6 py-3 rounded-full glass border border-white/10"
                >
                  <Icon size={20} className="text-cyan" />
                  <span className="text-sm font-medium text-gray-200">{tech.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
