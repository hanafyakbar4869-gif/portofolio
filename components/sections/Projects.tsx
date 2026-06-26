'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['Semua', 'Fullstack', 'AI', 'Frontend', 'Data'];

const projects = [
  {
    title: 'Landing Page Modern',
    category: 'Frontend',
    description: 'Landing page bisnis dengan animasi smooth, fully responsive, dan optimasi SEO.',
    tech: ['HTML', 'CSS', 'React', 'Tailwind'],
    accent: 'blue',
    demoUrl: 'https://homecareclinik.vercel.app',
    githubUrl: 'https://github.com/kulaiaja123-lgtm/homecareclinik',
  },
  {
    title: 'Sistem Kasir POS',
    category: 'Fullstack',
    description: 'Aplikasi kasir lengkap: manajemen produk, transaksi, laporan, dan multi-user login.',
    tech: ['React', 'Java', 'MySQL', 'REST API'],
    accent: 'green',
    demoUrl: 'https://umkm-pos-theta.vercel.app',
    githubUrl: 'https://github.com/kulaiaja123-lgtm/umkm-pos',
  },
  {
    title: 'AI Data Analyst',
    category: 'AI',
    description: 'Upload CSV/Excel, AI otomatis analisis data, buat visualisasi grafik, dan insight otomatis.',
    tech: ['Python', 'Streamlit', 'Pandas', 'OpenAI', 'React', 'Next.js'],
    accent: 'purple',
    demoUrl: '',
    githubUrl: '',
  },
  {
    title: 'Chatbot Pertanian',
    category: 'AI',
    description: 'Asisten AI untuk petani — menjawab pertanyaan soal hama, cuaca, dan teknik bertani.',
    tech: ['Python', 'Next.js', 'NLP', 'OpenAI API'],
    accent: 'cyan',
    demoUrl: 'https://panen-cerdas-c35b.vercel.app',
    githubUrl: 'https://github.com/kulaiaja123-lgtm/panen-cerdas',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Fullstack',
    description: 'Platform belanja online lengkap dengan keranjang belanja, checkout, dan dashboard admin.',
    tech: ['Next.js', 'Java', 'PostgreSQL', 'Midtrans'],
    accent: 'orange',
    demoUrl: 'https://catalog-fnb.vercel.app',
    githubUrl: 'https://github.com/kulaiaja123-lgtm/catalogFNB',
  },
  {
    title: 'Dashboard Streamlit',
    category: 'Data',
    description: 'Dashboard analitik interaktif berbasis Python untuk monitoring dan visualisasi data bisnis.',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    accent: 'yellow',
    demoUrl: 'https://customer-marketing-analytics-endsakxhpywwscwv8peuvj.streamlit.app',
    githubUrl: 'https://github.com/kulaiaja123-lgtm/customer-marketing-analytics',
  },
];

const accentColors: Record<string, string> = {
  blue: 'border-blue-500 shadow-blue-500/10 hover:shadow-blue-500/20',
  green: 'border-green-500 shadow-green-500/10 hover:shadow-green-500/20',
  purple: 'border-purple-500 shadow-purple-500/10 hover:shadow-purple-500/20',
  cyan: 'border-cyan shadow-cyan/10 hover:shadow-cyan/20',
  orange: 'border-orange-500 shadow-orange-500/10 hover:shadow-orange-500/20',
  yellow: 'border-yellow-500 shadow-yellow-500/10 hover:shadow-yellow-500/20',
};

const badgeColors: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400',
  green: 'bg-green-500/10 text-green-400',
  purple: 'bg-purple-500/10 text-purple-400',
  cyan: 'bg-cyan/10 text-cyan',
  orange: 'bg-orange-500/10 text-orange-400',
  yellow: 'bg-yellow-500/10 text-yellow-400',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered =
    activeCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Proyek</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan text-dark'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className={`glass rounded-2xl overflow-hidden border-t-4 ${accentColors[project.accent]} transition-shadow duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white pr-4">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${badgeColors[project.accent]}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-cyan transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-cyan transition-colors"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
