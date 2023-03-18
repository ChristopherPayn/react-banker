import { getPlayers, updatePlayers } from './';
import { v4 as uuidv4 } from 'uuid';

const startingBalance = () => {
    const retrievedBalance = JSON.parse(localStorage.getItem('startingBalance'));
    console.log('retrievedBalance', retrievedBalance);
    const parsedBalance = parseInt(retrievedBalance);
    return parsedBalance || 0;
};

export const accountNumberInUse = accNum => {
    const existingAccounts = getPlayers().map(player => player.accountNumber);
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
        balance: startingBalance(),
    };
    const players = getPlayers();
    players.push(newPlayer);
    updatePlayers(players);
    return true;
};
