import React from "react";

const Nav = ({ navigate }) => {
    return (
        <>
            <button onClick={() => navigate('addPlayer')}>Add Player</button>
            <button onClick={() => navigate('transaction')}>Transactions</button>
            <button onClick={() => navigate('players')}>View Players</button>
        </>
    )
};

export default Nav;
