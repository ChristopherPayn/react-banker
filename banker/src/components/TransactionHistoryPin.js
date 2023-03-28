import React, { useState } from 'react';
import styles from './styles/TransactionHistoryPin.module.css';

const TransactionHistoryPin = ({ verifyPin }) => {
  const [pin, setPin] = useState('');

  const submitPin = e => {
    e.preventDefault();
    verifyPin(pin);
    setPin('');
  };

  return (
    <div className={styles.transactionHistoryPinContainer}>
      <div>Please enter PIN</div>
      <form onSubmit={submitPin}>
        <input
          type='password'
          name='pin'
          id='pin'
          className={styles.transactionHistoryPinInput}
          onChange={e => setPin(e.target.value.slice(0, 4))}
          value={pin}
        />
      </form>
    </div>
  );
};

export default TransactionHistoryPin;
