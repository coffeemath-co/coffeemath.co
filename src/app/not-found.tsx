import Link from 'next/link';

import Routes from '@/lib/routes';

import styles from './not-found.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>
        <strong>404</strong>
        page not found
      </h1>
      <Link href={Routes.Home}>Go home</Link>
    </div>
  );
}

export default NotFound;
