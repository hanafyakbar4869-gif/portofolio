'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    layanan: '',
    pesan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281234567890'; // Update with your actual WhatsApp number
    const text = t('waTemplate', {
      nama: formData.nama,
      email: formData.email,
      layanan: formData.layanan,
      pesan: formData.pesan
    });
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="bg-primary-container rounded-[40px] p-8 md:p-16 border-2 border-on-surface shadow-pop relative overflow-hidden my-24">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-2xl">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-6">
          {t('titlePart1')} <br /> <span className="italic font-black text-primary">{t('titlePart2')}</span> {t('titlePart3')}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          {t('description')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-surface">{t('nameLabel')}</label>
              <input 
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                className="w-full bg-surface px-6 py-4 rounded-xl border-2 border-on-surface shadow-pop-sm focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-body-md" 
                placeholder={t('namePlaceholder')} 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-surface">{t('emailLabel')}</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-surface px-6 py-4 rounded-xl border-2 border-on-surface shadow-pop-sm focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-body-md" 
                placeholder={t('emailPlaceholder')} 
                type="email" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-label-bold text-label-bold text-on-surface">{t('serviceLabel')}</label>
            <select 
              name="layanan"
              value={formData.layanan}
              onChange={handleChange}
              required
              className="w-full bg-surface px-6 py-4 rounded-xl border-2 border-on-surface shadow-pop-sm focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-body-md appearance-none" 
            >
              <option value="">{t('servicePlaceholder')}</option>
              <option value={t('serviceOpt1')}>{t('serviceOpt1')}</option>
              <option value={t('serviceOpt2')}>{t('serviceOpt2')}</option>
              <option value={t('serviceOpt3')}>{t('serviceOpt3')}</option>
              <option value={t('serviceOpt4')}>{t('serviceOpt4')}</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-label-bold text-label-bold text-on-surface">{t('messageLabel')}</label>
            <textarea 
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              required
              className="w-full bg-surface px-6 py-4 rounded-xl border-2 border-on-surface shadow-pop-sm focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-body-md min-h-[150px] resize-none" 
              placeholder={t('messagePlaceholder')}
            ></textarea>
          </div>

          <button type="submit" className="candy-button w-full md:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-12 py-4 rounded-full border-2 border-on-surface shadow-pop hover:shadow-pop-sm">
            {t('submitButton')}
          </button>
        </form>
      </div>
    </section>
  );
}
