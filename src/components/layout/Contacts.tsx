import styles from './Contacts.module.css';

import {WhatsappLogo, InstagramLogo} from '@phosphor-icons/react';

const Contacts = () => {
    return (
     <div className={styles.contacts}>
        <div className={styles.contact}>
            <span>OFERTA PROMOCIONAL</span>
        </div>
        <a 
            className={styles.contact} 
            href="https://wa.me/5562996967129?text=Gostaria%20de%20contratar%20um%20plano%20de%20internet"
            target="_blank"  
            rel="noopener noreferrer"
        >
            <WhatsappLogo weight='fill' size={32}/>
            <span>(62) 99696-7129</span>
        </a>
        <a href="https://instagram.com/@portaltelecomoficial" className={styles.social_contact}>
            <InstagramLogo weight="fill" size={32} />
            @portaltelecomoficial
        </a>
     </div>
    );
  };
  
  export default Contacts;