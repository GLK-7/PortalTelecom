import React from 'react';
import styles from './PlansCard.module.css';
import {
  SealCheck,
  WifiHigh,
  Star,
  Lightning,
  Wrench,
  AppWindow,
  WhatsappLogo,
} from '@phosphor-icons/react';

interface Plan {
  name: string;
  speed: string;
  price: string;
  benefits: string[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Plano Básico',
    speed: '100 Mbps',
    price: 'R$ 69,90/mês',
    benefits: [
      'Wi-Fi grátis',
      'Baixa latência',
      'Instalação grátis',
      'Suporte personalizado',
    ],
  },
  {
    name: 'Plano Comfort',
    speed: '200 Mbps',
    price: 'R$ 89,90/mês',
    benefits: [
      'Wi-Fi grátis & Tecnologia Mesh inclusa',
      'Baixíssima latência (Ultra Fibra)',
      'Instalação grátis',
      'Suporte personalizado',
      'Aplicativo Watch',
    ],
    recommended: true,
  },
  {
    name: 'Plano Premium',
    speed: '300 Mbps',
    price: 'R$ 99,90/mês',
    benefits: [
      'Wi-Fi grátis & Tecnologia Mesh inclusa',
      'Baixíssima latência (Ultra Fibra)',
      'Instalação grátis',
      'Suporte personalizado',
      'Aplicativo Watch',
    ],
  },
];

const iconMap: { [key: string]: JSX.Element } = {
  'Wi-Fi grátis': <WifiHigh size={20} weight="fill" />,
  'Baixa latência': <Lightning size={20} weight="fill" />,
  'Instalação grátis': <Wrench size={20} weight="fill" />,
  'Suporte personalizado': <Star size={20} weight="fill" />,
  'Wi-Fi grátis & Tecnologia Mesh inclusa': (
    <WifiHigh size={20} weight="fill" />
  ),
  'Baixíssima latência (Ultra Fibra)': <Lightning size={20} weight="fill" />,
  'Aplicativo Watch': <AppWindow size={20} weight="fill" />,
};

const PlansCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      {plans.map((plan, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.planTitle}>
            <h3 className={styles.planName}>{plan.name}</h3>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.planSpeed}>{plan.speed}</p>
            <p className={styles.planPrice}>{plan.price}</p>
            <button className={styles.subscribeButton}>
              <WhatsappLogo size={24} weight="fill" />
              Assine agora
            </button>
            <br />
            <span>Benefícios</span>
            <ul className={styles.benefitsList}>
              {plan.benefits.map((benefit, i) => (
                <li key={i} className={styles.benefit}>
                  {iconMap[benefit]} {benefit}
                </li>
              ))}
            </ul>
            {plan.recommended && (
              <div className={styles.recommendedBadge}>
                <SealCheck size={28} weight="fill" />
                <span>Recomendado</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlansCard;
