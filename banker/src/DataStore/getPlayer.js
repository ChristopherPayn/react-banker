import { getPlayers } from './';

export const getPlayer = accountNumber => {
    const players = getPlayers();
    const foundPlayer = players.find(player => {
        return player.accountNumber === accountNumber;
    });
    return foundPlayer;
};
