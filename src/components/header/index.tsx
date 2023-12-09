import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>coffeemath</h1>
      <span>a safe coffee place</span>
    </header>
  );
}

export default Header;
