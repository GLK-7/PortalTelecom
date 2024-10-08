import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h3>Portal Telecom</h3>
        </div>
        <ul className={styles.navMenu}>
          <li>
            <a href="#plans">Planos</a>
          </li>
        </ul>
      </nav>
      <svg
        className={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#121212', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#163b6d', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)" /* Cor do fundo */
          d="M0,64L30,80C60,96,120,128,180,144C240,160,300,160,360,154.7C420,149,480,139,540,149.3C600,160,660,192,720,213.3C780,235,840,245,900,234.7C960,224,1020,192,1080,160C1140,128,1200,96,1260,90.7C1320,85,1380,107,1410,117.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0H0Z"
        />
      </svg>
    </>
  );
};

export default Navbar;
