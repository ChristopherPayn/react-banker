import { getPlayers } from "./getPlayers";
import { updatePlayers } from "./updatePlayers";

export const performTransaction = (playerFrom, playerTo, amount) => {
  const allPlayers = getPlayers();
  console.log('allPlayers', allPlayers);
  console.log('playerFrom', playerFrom);
  console.log('playerTo', playerTo);
  console.log('amount', amount);

  allPlayers.forEach(player => {
    if (player.id === playerFrom.id) {
      player.balance = parseInt(player.balance) - parseInt(amount);
    }
    if (player.id === playerTo.id) {
      player.balance = parseInt(player.balance) + parseInt(amount);
    }
  });
  updatePlayers(allPlayers);
  console.log('allPlayers AFTER', allPlayers);
};
