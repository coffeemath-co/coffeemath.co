import Image from 'next/image';

import styles from './branding.module.css';
import Link from 'next/link';
import Routes from '@/lib/routes';

const Branding = () => {
  return (
    <Link href={Routes.Home} className={styles.container}>
      <Image
        src="/logo.svg"
        alt="coffeemath logo"
        width={75}
        height={75}
        className={styles.icon}
      />
      <div className={styles.textContainer}>
        <span className={styles.brandName}>coffeemath.co</span>
        <span>A safe coffee place</span>
      </div>
    </Link>
  );
};

export default Branding;
