'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    stars: 5,
    text: 'Hasil kerjanya memuaskan, web kami jadi lebih modern dan cepat!',
    author: 'Budi Santoso',
    role: 'Owner Toko Online',
  },
  {
    stars: 5,
    text: 'Sistem kasirnya sangat membantu operasional restoran kami sehari-hari.',
    author: 'Sari Dewi',
    role: 'Manager Restoran',
  },
  {
    stars: 5,
    text: 'Chatbot AI-nya benar-benar membantu para petani di komunitas kami.',
    author: 'Ahmad Fauzi',
    role: 'Koordinator Tani',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Testimoni</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.author}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass glass-hover rounded-2xl p-8 relative"
              >
                <Quote size={32} className="text-cyan/40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
