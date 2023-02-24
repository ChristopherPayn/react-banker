export const getPlayers = () => {
    const players = localStorage.getItem('players');
    return players ? JSON.parse(players) : [];
};
