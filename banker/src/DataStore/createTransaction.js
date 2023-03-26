export const createTransaction = (from, to, amount, currentBalance) => {
  return {
    from: from || 'BANK',
    to: to || 'BANK',
    amount,
    currentBalance,
  };
};
