import styles from './Home.module.css';
import PlansCard from '../layout/PlansCard';
import logo from '../../assets/logo.png';
import Contacts from '../../components/layout/Contacts';


const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h2>RAPIDEZ, QUALIDADE & <span> CONFIANÇA</span></h2>
        </div>
      <section id="plans" className={styles.section}>
        <h2>Conheça nossos planos</h2>
        <PlansCard />
      </section>
      <h3>Fale com a gente</h3>
        <Contacts/>
    </div>
  );
};

export default Home;
