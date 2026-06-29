import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t-2 border-on-surface py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a className="font-headline-md text-headline-md font-black text-on-surface flex items-center gap-2" href="#">
            <Image src="/images/logo.svg" alt="Logo" width={48} height={48} /> KulaiTach
          </a>
          <p className="font-label-bold text-label-bold text-on-surface-variant text-center md:text-left">
            {t('copyright')}
          </p>
          <div className="flex gap-4">
            {/* Social icons using Material Symbols or lucide (will use lucide for ease or material symbols if preferred) */}
            <a 
              className="w-10 h-10 rounded-full bg-surface-container border-2 border-on-surface shadow-pop-sm flex items-center justify-center hover:bg-primary-container hover:-translate-y-1 transition-transform" 
              href="https://github.com/kulaiaja123-lgtm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg" alt="Github" width={20} height={20} className="invert-0 dark:invert" style={{ filter: 'var(--icon-filter, none)' }} />
            </a>
            <a 
              className="w-10 h-10 rounded-full bg-surface-container border-2 border-on-surface shadow-pop-sm flex items-center justify-center hover:bg-primary-container hover:-translate-y-1 transition-transform" 
              href="https://www.linkedin.com/in/hanafitech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="invert-0 dark:invert" style={{ filter: 'var(--icon-filter, none)' }} />
            </a>
            <a 
              className="w-10 h-10 rounded-full bg-surface-container border-2 border-on-surface shadow-pop-sm flex items-center justify-center hover:bg-primary-container hover:-translate-y-1 transition-transform" 
              href="https://www.instagram.com/remah_ramah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg" alt="Instagram" width={20} height={20} className="invert-0 dark:invert" style={{ filter: 'var(--icon-filter, none)' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
