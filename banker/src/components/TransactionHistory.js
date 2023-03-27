import React from 'react';
import TransactionHistoryLineItem from './TransactionHistoryLineItem';
import * as ds from '../DataStore';
import styles from './styles/TransactionHistory.module.css';

const TransactionHistory = ({ changeView }) => {
  const navigateBack = () => {
    changeView('players');
  }

  const historyTarget = ds.getHistoryTarget();

  return (
    <div className={styles.transactionHistoryContainer}>
      <br />
      <div
        className={styles.transactionHistoryBack}
        onClick={navigateBack}
       >
        &lt;- back
      </div>
      <div className={styles.transactionHistoryHeader}>{historyTarget.name}'s Transaction History</div>
      <hr />
      <div className={styles.lineItemHeader}>
        {['with', 'type', 'amount', 'current'].map(string => <span>{string}</span>)}
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
    </div>
  );
};

export default TransactionHistory;
