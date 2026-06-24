'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, ShoppingCart, Monitor, BarChart2, Bot, Code2 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Page & Company Profile',
    description: 'Halaman web modern, cepat, dan SEO-friendly untuk bisnis kamu.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Toko online lengkap dengan keranjang, payment gateway, dan manajemen produk.',
  },
  {
    icon: Monitor,
    title: 'Sistem Kasir POS',
    description: 'Aplikasi kasir digital dengan laporan penjualan real-time dan manajemen stok.',
  },
  {
    icon: BarChart2,
    title: 'Dashboard & Data Analitik',
    description: 'Visualisasi data interaktif untuk monitoring bisnis kamu secara real-time.',
  },
  {
    icon: Bot,
    title: 'Chatbot & AI Integration',
    description: 'Chatbot cerdas dan integrasi AI untuk otomatisasi proses bisnis kamu.',
  },
  {
    icon: Code2,
    title: 'Aplikasi Fullstack Custom',
    description: 'Aplikasi web custom sesuai kebutuhan spesifik bisnis kamu dari nol.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Layanan</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Apa yang bisa saya bantu?</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="glass glass-hover rounded-2xl p-8 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors duration-300">
                    <Icon size={28} className="text-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
