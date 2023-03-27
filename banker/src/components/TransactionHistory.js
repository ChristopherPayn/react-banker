import React from 'react';
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
        <span>with</span>
        <span>type</span>
        <span>amount</span>
        <span>current</span>
      </div>
      <hr />
      {historyTarget.transactions.map((transaction, i) => (
        <div className={styles.lineItem} key={i}>
          <span>{transaction.from === historyTarget.name ? transaction.to : transaction.from}</span>
          <span>{transaction.from === historyTarget.name ? 'out' : 'in'}</span>
          <span>{transaction.amount}</span>
          <span>{transaction.currentBalance}</span>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
