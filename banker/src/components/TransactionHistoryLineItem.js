import React from 'react';

const TransactionHistoryLineItem = ({ transaction, historyTarget, className }) => {
  return (
    <div className={className}>
      <span>{transaction.from === historyTarget.name ? transaction.to : transaction.from}</span>
      <span>{transaction.from === historyTarget.name ? 'out' : 'in'}</span>
      <span>{transaction.amount}</span>
      <span>{transaction.currentBalance}</span>
  </div>
  )
};

export default TransactionHistoryLineItem;
