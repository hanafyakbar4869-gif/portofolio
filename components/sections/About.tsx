'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const stats = [
  { value: '6+', label: 'Proyek Selesai' },
  { value: '3+', label: 'Tahun Pengalaman' },
  { value: '100%', label: 'Client Satisfaction' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Tentang <span className="text-gradient">Saya</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-purple opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-full border-2 border-cyan/50 glow-cyan overflow-hidden bg-white/5">
                  <Image
                    src="/images/profile.png"
                    alt="MHD HANAFI AKBAR"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Saya adalah Fullstack Developer dengan passion dalam membangun produk digital yang berdampak.
                Dari antarmuka yang indah hingga backend yang kuat, saya handle semuanya — termasuk integrasi AI dan analitik data.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass glass-hover rounded-2xl p-8 text-center glow-cyan"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
