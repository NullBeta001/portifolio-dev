/* eslint-disable no-undef */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portifolio Dev',
  description: 'Portifólio Dev - Fábio Oliveira'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='bg-[#272727]'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
