import styles from './Home.module.css';
import PlansCard from '../layout/PlansCard';
import banner from '../../assets/banner3.jpg';

const Home = () => {
  return (
    <div className={styles.main}>
      <section id="about" className={styles.section}>
        <div className={styles.banner}>
          <h2>
            Internet para Nova Crixás com Rapidez, Qualidade &{' '}
            <span>Confiança.</span>
          </h2>
          <img src={banner} alt="banner" />
          <div className={styles.fade}></div>
        </div>
      </section>
      <section id="plans" className={styles.section}>
        <h2>Nossos planos</h2>
        <PlansCard />
      </section>
      <section id="coverage" className={styles.section}></section>
    </div>
  );
};

export default Home;
