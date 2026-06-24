'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, MessageCircle, Github, Linkedin, Instagram, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    layanan: '',
    pesan: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Hubungi Saya</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Punya proyek? Mari diskusi!</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Lokasi</h4>
                  <p className="text-gray-400 text-sm">Bukittinggi, Sumatera Barat, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">hanafi.analytics.trade@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">+62 895-6303-45994</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-white font-medium mb-4">Social Links</h4>
                <div className="flex items-center gap-4">
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama
                  </label>
                  <input
                    id="nama"
                    name="nama"
                    type="text"
                    required
                    value={formData.nama}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm"
                    placeholder="Nama kamu"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="layanan" className="block text-sm font-medium text-gray-300 mb-2">
                    Jenis Layanan
                  </label>
                  <select
                    id="layanan"
                    name="layanan"
                    required
                    value={formData.layanan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-dark">Pilih layanan</option>
                    <option value="landing" className="bg-dark">Landing Page</option>
                    <option value="kasir" className="bg-dark">Kasir POS</option>
                    <option value="ecommerce" className="bg-dark">E-Commerce</option>
                    <option value="dashboard" className="bg-dark">Dashboard</option>
                    <option value="chatbot" className="bg-dark">Chatbot</option>
                    <option value="custom" className="bg-dark">Custom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    required
                    value={formData.pesan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm resize-none"
                    placeholder="Ceritakan tentang proyek kamu..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan text-dark font-semibold rounded-full hover:bg-cyan/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                >
                  <Send size={18} />
                  {submitted ? 'Terkirim!' : 'Kirim Pesan'}
                </button>

                <a
                  href="https://wa.me/62895630345994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-200"
                >
                  <MessageCircle size={18} />
                  Chat Langsung di WhatsApp
                </a>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
