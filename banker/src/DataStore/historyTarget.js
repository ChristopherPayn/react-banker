import { getPlayer } from './getPlayer';

export const setHistoryTarget = accountNumber => {
  const targetPlayer = getPlayer(accountNumber);
  localStorage.setItem('targetPlayer', JSON.stringify(targetPlayer));
};

export const getHistoryTarget = () => {
  const targetPlayer = localStorage.getItem('targetPlayer');
  return JSON.parse(targetPlayer);
};
