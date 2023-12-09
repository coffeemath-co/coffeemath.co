import Link from 'next/link';

import Routes from '@/lib/routes';

import styles from './page.module.css';

export default function Home() {
  return (
    <Link href={Routes.Brew} className={styles.link}>
      start brewing
    </Link>
  );
}
