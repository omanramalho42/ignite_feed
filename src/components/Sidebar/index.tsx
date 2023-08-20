import React from 'react'

import Avatar from '../Avatar';
import { PencilLine } from 'phosphor-react';

import styles from './styles.module.css';

import ProfileBackground from '../../assets/profile-bg.svg';

const Sidebar:React.FC = () => {
  return (
    <div className={styles.containerProfile}>
      <img alt='Background Profile' src={ProfileBackground} />
      
      <div className={styles.avatarPosition}>
        <Avatar
          hasBorder
          src={"https://github.com/omanramalho42.png"}
          alt="Avatar"
        />
      </div>

      <div className={styles.contentTextInfo}>
        <h3>Oman Ramalho</h3>
        <h5>Web Developer</h5>
      </div>

      <div className={styles.separator} />

      <button className={styles.button}>
        <a href="#" className={styles.ContentButtonInfo}>
          <PencilLine size={20} />
          <p>Editar seu perfil</p>
        </a>
      </button>
    </div>
  )
}

export default Sidebar