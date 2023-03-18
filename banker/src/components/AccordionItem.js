import React, {useState} from 'react';
import styles from './styles/AccordionItem.module.css';

const AccordionItem = ({ accountNumber, name, balance, pin, deleteComponent }) => {
  const [isActive, setIsActive] = useState(false);
  
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
        </div>
      }
    </div>
  );
};

export default AccordionItem;
