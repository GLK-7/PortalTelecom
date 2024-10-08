import styles from './Footer.module.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.footerMenu}>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#plans">Planos</a>
          </li>
          <li>
            <a href="#coverage">Cobertura</a>
          </li>
        </ul>
        <div className={styles.socialMedia}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2024 Portal Telecom. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
