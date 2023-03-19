import React from 'react';
import logo from '../assets/game-banker-logo.png';
import styles from './styles/Splash.module.css';

const Splash = () => (
    <div className={styles.splashLogoContainer}>
      <img src={logo} alt='Game Banker logo' />
    </div>
  );

export default Splash;
