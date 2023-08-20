import React from 'react';

import styles from './styles.module.css';
import Logo from '../../assets/ignite-logo.svg';

const Header:React.FC = () => {
  return (
    <div 
      className={styles.header}
    >
      <img 
        className={styles.logo} 
        alt='logo' 
        src={Logo} 
      />
      <strong className={styles.title}>
        Ignite Feed
      </strong>
    </div>
  )
}

export default Header