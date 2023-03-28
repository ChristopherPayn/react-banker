import React, { useState } from 'react';
import TransactionHistoryLineItem from './TransactionHistoryLineItem';
import TransactionHistoryPin from './TransactionHistoryPin';
import * as ds from '../DataStore';
import styles from './styles/TransactionHistory.module.css';

const TransactionHistory = ({ changeView }) => {
  const [pinVerified, setPinVerified] = useState(false);

  const navigateBack = () => {
    changeView('players');
  }

  const historyTarget = ds.getHistoryTarget();

  const verifyPin = (givenPin) => {
    if (givenPin === historyTarget.pin) {
      setPinVerified(true);
    };
  };

  return (
    <div className={styles.transactionHistoryContainer}>
      <br />
      <div
        className={styles.transactionHistoryBack}
        onClick={navigateBack}
      >
        &lt;- back
      </div>
      {pinVerified ?
        <>
          <div className={styles.transactionHistoryHeader}>{historyTarget.name}'s Transaction History</div>
          <hr />
          <div className={styles.lineItemHeader}>
            {['with', 'type', 'amount', 'current'].map((string, i) => <span key={i}>{string}</span>)}
          </div>
          <hr />
          {historyTarget.transactions.map((transaction, i) => (
            <TransactionHistoryLineItem
              transaction={transaction}
              historyTarget={historyTarget}
              className={styles.lineItem}
              key={i}
            />
          ))}
        </> :
        <TransactionHistoryPin verifyPin={verifyPin} />
      }
    </div>
  );
};

export default TransactionHistory;
