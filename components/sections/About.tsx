'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  const skills = [
    { name: 'React', icon: 'code', bgColor: 'bg-primary-container' },
    { name: 'Next.js', icon: 'terminal', bgColor: 'bg-on-background' },
    { name: 'Tailwind', icon: 'palette', bgColor: 'bg-[#38bdf8]' },
    { name: 'TypeScript', icon: 'data_object', bgColor: 'bg-[#3178c6]' },
    { name: 'AI Integration', icon: 'smart_toy', bgColor: 'bg-secondary-container' },
    { name: 'Backend', icon: 'database', bgColor: 'bg-tertiary-fixed' },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-center" id="about">
      {/* Left: About */}
      <div className="space-y-6">
        <div className="inline-block px-4 py-1 bg-tertiary-fixed rounded-full border-2 border-on-surface text-label-bold font-label-bold mb-4 transform -rotate-2">
          {t('greeting')}
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">{t('title')}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant bg-surface-container-low p-6 rounded-2xl border-2 border-on-surface shadow-pop-sm">
          {t('description')}
        </p>
        
        {/* Simple stats could go here if wanted, but left out to keep the Pop design simple */}
      </div>

      {/* Right: Skills */}
      <div className="space-y-6" id="skills">
        <h3 className="font-headline-md text-headline-md text-on-surface">{t('techStackTitle')}</h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex items-center gap-3 p-3 bg-surface-container rounded-xl border-2 border-on-surface shadow-pop-sm hover:-translate-y-1 transition-transform cursor-default"
            >
              <div className={`w-10 h-10 rounded-full ${skill.bgColor} flex items-center justify-center border-2 border-on-surface text-on-primary`}>
                <span className="material-symbols-outlined">{skill.icon}</span>
              </div>
              <span className="font-label-bold text-label-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
