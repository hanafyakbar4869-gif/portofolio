import '../globals.css';
import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-outfit',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'KulaiTach',
  description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
  keywords: ['Fullstack Developer', 'Web Developer', 'AI Integration', 'Batam', 'Indonesia', 'Next.js', 'React'],
  authors: [{ name: 'MHD HANAFI AKBAR' }],
  openGraph: {
    title: 'KulaiTach',
    description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
    type: 'website',
    locale: 'id_ID',
    images: ['/images/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KulaiTach',
    description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
    images: ['/images/logo.svg'],
  },
  robots: 'index, follow',
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${outfit.variable} ${jakarta.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
