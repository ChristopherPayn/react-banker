import { getPlayers, updatePlayers } from './';

export const deletePlayer = id => {
    const players = getPlayers();
    const updatedPlayers = players.filter(player => player.id !== id);
    updatePlayers(updatedPlayers);
};
