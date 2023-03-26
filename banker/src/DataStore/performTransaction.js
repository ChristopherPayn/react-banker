import { getPlayers } from './getPlayers';
import { updatePlayers } from './updatePlayers';
import { createTransaction } from './createTransaction';

export const performTransaction = (playerFrom, playerTo, amount) => {
  const allPlayers = getPlayers();

  allPlayers.forEach(player => {
    if (player.id === playerFrom.id) {
      player.balance = parseInt(player.balance) - parseInt(amount);
      player.transactions.push(createTransaction(player.name, playerTo.name, amount, player.balance));
    }
    if (player.id === playerTo.id) {
      player.balance = parseInt(player.balance) + parseInt(amount);
      player.transactions.push(createTransaction(playerFrom.name, player.name, amount, player.balance));
    }
  });
  updatePlayers(allPlayers);
};
