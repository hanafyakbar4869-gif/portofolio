'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Projects() {
  const t = useTranslations('Projects');
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const projects = [
    {
      title: t('p1_title'),
      category: t('p1_category'),
      description: t('p1_desc'),
      tech: ['HTML', 'CSS', 'React', 'Tailwind'],
      bgColor: 'bg-[#ffdeeb]',
      image: '/images/landingPage.png',
      demoUrl: 'https://homecareclinik.vercel.app',
      githubUrl: 'https://github.com/kulaiaja123-lgtm/homecareclinik',
    },
    {
      title: t('p2_title'),
      category: t('p2_category'),
      description: t('p2_desc'),
      tech: ['React', 'Java', 'MySQL', 'REST API'],
      bgColor: 'bg-primary-container',
      image: '/images/umkm-pos.png',
      demoUrl: 'https://umkm-pos-theta.vercel.app',
      githubUrl: 'https://github.com/kulaiaja123-lgtm/umkm-pos',
    },
    {
      title: t('p3_title'),
      category: t('p3_category'),
      description: t('p3_desc'),
      tech: ['Python', 'Streamlit', 'Pandas', 'OpenAI', 'React', 'Next.js'],
      bgColor: 'bg-secondary-container',
      image: '/images/chatBotPertanian.png',
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: t('p4_title'),
      category: t('p4_category'),
      description: t('p4_desc'),
      tech: ['Python', 'Next.js', 'NLP', 'OpenAI API'],
      bgColor: 'bg-tertiary-container',
      image: '/images/chatBotPertanian.png',
      demoUrl: 'https://panen-cerdas-c35b.vercel.app',
      githubUrl: 'https://github.com/kulaiaja123-lgtm/panen-cerdas',
    },
    {
      title: t('p5_title'),
      category: t('p5_category'),
      description: t('p5_desc'),
      tech: ['Next.js', 'Java', 'PostgreSQL', 'Midtrans'],
      bgColor: 'bg-[#ffdeeb]',
      image: '/images/dapurkita.png',
      demoUrl: 'https://catalog-fnb.vercel.app',
      githubUrl: 'https://github.com/kulaiaja123-lgtm/catalogFNB',
    },
    {
      title: t('p6_title'),
      category: t('p6_category'),
      description: t('p6_desc'),
      tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
      bgColor: 'bg-primary-container',
      image: '/images/dasboardanalisis.png',
      demoUrl: 'https://customer-marketing-analytics-endsakxhpywwscwv8peuvj.streamlit.app',
      githubUrl: 'https://github.com/kulaiaja123-lgtm/customer-marketing-analytics',
    },
  ];

  return (
    <section id="work" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">{t('title')}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-4">
            {t('description')}
          </p>
        </div>
        
        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="p-3 rounded-full border-2 border-on-surface hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-pop"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="p-3 rounded-full border-2 border-on-surface hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-pop"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0"
              >
                <div className="group flex flex-col h-full">
                  <div className={`aspect-[4/3] ${project.bgColor} rounded-3xl border-2 border-on-surface shadow-pop overflow-hidden mb-6 relative`}>
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500 bg-[radial-gradient(#1d1a23_2px,transparent_2px)] [background-size:16px_16px] opacity-30" />
                    )}
                    
                    <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-bold text-label-bold px-4 py-2 rounded-full border-2 border-on-surface">
                      {project.category}
                    </div>
                  </div>
                  
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant text-xs border-2 border-on-surface/20 font-label-bold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-label-bold text-on-surface hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        {t('liveDemo')}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-label-bold text-on-surface hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        {t('code')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Arrows (Overlay) */}
        <div className="md:hidden absolute inset-y-0 -left-2 -right-2 flex items-center justify-between pointer-events-none">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="p-2 rounded-full bg-surface border-2 border-on-surface shadow-pop pointer-events-auto hover:bg-primary hover:text-on-primary disabled:opacity-50 disabled:cursor-not-allowed -ml-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="p-2 rounded-full bg-surface border-2 border-on-surface shadow-pop pointer-events-auto hover:bg-primary hover:text-on-primary disabled:opacity-50 disabled:cursor-not-allowed -mr-2"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full border-2 border-on-surface transition-all ${
              index === selectedIndex ? 'bg-primary scale-125' : 'bg-surface hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
