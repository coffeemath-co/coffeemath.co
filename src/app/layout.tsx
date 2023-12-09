import cn from 'classnames';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Corben, Merriweather } from 'next/font/google';

import Header from '@/components/header';

import './reset.css';
import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-main',
});

const corben = Corben({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-title',
});

export const metadata: Metadata = {
  title: 'coffeemath, a safe coffee place',
  description: 'A safe coffee place',
};

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={cn(merriweather.variable, corben.variable)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
