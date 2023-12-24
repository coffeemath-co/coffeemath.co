'use client';

import Link from 'next/link';

import Routes from '@/lib/routes';
import BrewMethods from '@/lib/types/methods';

import styles from './brew.module.css';

function BrewPage() {
  return Object.values(BrewMethods).map((method: string) => (
    <Link key={method} href={`${Routes.Brew}/${method}`}>
      {method}
    </Link>
  ));
}

export default BrewPage;
