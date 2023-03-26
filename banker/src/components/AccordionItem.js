import React, { useState } from 'react';
import { TbFileDatabase } from 'react-icons/tb';
import * as ds from '../DataStore';
import styles from './styles/AccordionItem.module.css';

const AccordionItem = ({ accountNumber, name, balance, pin, deleteComponent, changeView }) => {
  const [isActive, setIsActive] = useState(false);

  const navigateToHistory = () => {
    ds.setHistoryTarget(accountNumber);
    changeView('history');
  };
  
  return (
    <div>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}  
      >
        <div className={styles.playerName}>{name}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
        <div className={styles.accordionContent}>
          <div>Account number: {accountNumber}</div>
          <div>Balance: {balance}</div>
          <div>Pin: {pin}</div>
          {deleteComponent}
          <span>
            <TbFileDatabase
              className={styles.playerListTransactions}
              onClick={navigateToHistory}
              title='View transaction history'
            />
          </span>
        </div>
      }
    </div>
  );
};

export default AccordionItem;
