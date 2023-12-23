import Branding from '@/components/branding';

import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <Branding />
    </header>
  );
}

export default Header;
