import React from 'react';
import * as ds from '../DataStore';

const TransactionHistory = () => {
  return (
    <>
      {ds.getHistoryTarget().transactions.map((transaction, i) => (
        <div key={i}>{transaction.from} -&gt; {transaction.to} {transaction.amount} ({transaction.currentBalance})</div>
      ))}
    </>
  );
};

export default TransactionHistory;
