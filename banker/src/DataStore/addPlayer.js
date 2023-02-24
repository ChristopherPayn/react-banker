import { getPlayers, updatePlayers } from './';
import { v4 as uuidv4 } from 'uuid';

export const accountNumberInUse = accNum => {
    const existingAccounts = getPlayers().map(player => player.accountNumber);
    console.log('accNum', accNum);
    console.log('existingAccounts', existingAccounts);
    return !!existingAccounts.find(existingAccNum => existingAccNum === accNum);
};

export const addPlayer = data => {
    const { accountNumber, name, pin } = data;
    if (accountNumberInUse(accountNumber)) return;
    const newPlayer = {
        id: uuidv4(),
        accountNumber,
        name,
        pin,
    };
    const players = getPlayers();
    players.push(newPlayer);
    updatePlayers(players);
    return true;
};
