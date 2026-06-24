import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'DevStudio — Fullstack Developer Portfolio',
  description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
  keywords: ['Fullstack Developer', 'Web Developer', 'AI Integration', 'Batam', 'Indonesia', 'Next.js', 'React'],
  authors: [{ name: 'MHD HANAFI AKBAR' }],
  openGraph: {
    title: 'DevStudio — Fullstack Developer Portfolio',
    description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'DevStudio Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevStudio — Fullstack Developer Portfolio',
    description: 'Portfolio profesional MHD HANAFI AKBAR, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.',
    images: ['https://bolt.new/static/og_default.png'],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
