import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'KulaiTach — Fullstack Developer Portfolio',
  description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
  keywords: ['Fullstack Developer', 'Web Developer', 'AI Integration', 'Batam', 'Indonesia', 'Next.js', 'React'],
  authors: [{ name: 'MHD HANAFI AKBAR' }],
  openGraph: {
    title: 'KulaiTach — Fullstack Developer Portfolio',
    description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
    type: 'website',
    locale: 'id_ID',
    images: ['/images/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KulaiTach — Fullstack Developer Portfolio',
    description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
    images: ['/images/logo.svg'],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
