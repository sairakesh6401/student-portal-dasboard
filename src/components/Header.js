import Image from 'next/image';
import styles from '../styles/Header.module.css';
import logo from '../../public/images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="ConnectEd Logo" className={styles.logo} />
        <span className={styles.logoText}>ConnectEd</span>
      </div>
      <h1 className={styles.title}>Student Portal</h1>
      <div className={styles.greeting}>
        <p>Hello, Rakesh!</p>
        <p className={styles.classDetails}>Class 7, Math + Science</p>
      </div>
    </header>
  );
};

export default Header;
