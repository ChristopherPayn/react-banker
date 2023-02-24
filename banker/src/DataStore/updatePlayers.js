export const updatePlayers = players => {
    localStorage.setItem('players', JSON.stringify(players));
};
