import React from 'react';
import Accordion from './Accordion';
import styles from './styles/ViewPlayers.module.css';
import globalStyles from './styles/Global.module.css';

const ViewPlayers = () => {
  return (
    <div className={styles.viewPlayersContainer}>
      <h1 className={`${globalStyles.formHeader} ${styles.viewPlayersHeader}`}>Players</h1>
        <Accordion />
    </div>
  );
};

export default ViewPlayers;
