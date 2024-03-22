import type { Metadata } from 'next';
import { Josefin_Slab } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const josefin = Josefin_Slab({
  weight: ['400', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Adventures in the World of Travel',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={josefin.className}>{children}</body>
    </html>
  );
}