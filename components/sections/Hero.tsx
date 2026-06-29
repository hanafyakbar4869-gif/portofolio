'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center gap-12 pt-12 md:pt-24 z-10" id="home">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large Tertiary Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-tertiary-fixed opacity-60 mix-blend-multiply blur-sm border-4 border-on-surface border-dashed"></div>
        {/* Floating Pink Shape */}
        <div className="absolute top-10 right-[20%] w-24 h-24 bg-secondary-container rounded-3xl rotate-12 border-2 border-on-surface shadow-pop animate-pulse hidden md:block"></div>
        {/* Floating Mint Shape */}
        <div className="absolute bottom-20 right-[30%] w-16 h-16 bg-[#34d399] rounded-full -rotate-12 border-2 border-on-surface shadow-pop hidden md:block" style={{ animation: 'bounce 3s infinite' }}></div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8 relative z-10">
        <div className="inline-block px-5 py-2 bg-tertiary-fixed rounded-full border-2 border-on-surface text-body-lg font-label-bold mb-2 transform -rotate-2">
          {t('greeting')}
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
          MHD HANAFI AKBAR <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">KULAI</span>
            <svg className="absolute -bottom-2 -left-2 w-full h-4 text-secondary-container -z-10" preserveAspectRatio="none" viewBox="0 0 100 20">
              <path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="8"></path>
            </svg>
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl border-l-4 border-secondary-container pl-6">
          {t('description')}
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="#work"
            className="candy-button inline-flex items-center gap-4 bg-on-surface text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full border-2 border-on-surface shadow-pop group"
          >
            {t('cta')}
            <span className="bg-on-primary text-on-surface rounded-full p-1 group-hover:translate-x-1 transition-transform flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </span>
          </a>
        </div>
      </div>

      {/* Right Side Graphic / Profile Image */}
      <div className="relative w-full h-[320px] shrink-0 mt-8 md:mt-0 md:flex-1 md:h-[500px] max-w-md mx-auto">
        <div className="absolute inset-0 bg-surface-container rounded-3xl border-2 border-on-surface shadow-pop rotate-2 md:rotate-3 overflow-hidden group">
          {/* We use profile.png as requested */}
          <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/profile.png"
              alt="MHD HANAFI AKBAR"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        {/* Accent decorative dot */}
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-container rounded-full border-2 border-on-surface shadow-pop-sm z-20 hidden md:block"></div>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-tertiary-fixed rounded-xl border-2 border-on-surface shadow-pop-sm z-20 hidden md:block rotate-12"></div>
      </div>
    </section>
  );
}
