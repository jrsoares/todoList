import Logo from '../assets/Logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <>
      <header className={styles.wrapper}>
        <img src={Logo} alt="" />
      </header>
    </>
  );
}
