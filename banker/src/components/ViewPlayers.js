import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
// import { getPlayers, deletePlayer } from '../DataStore';
import * as ds from '../DataStore';

const ViewPlayers = () => {
    const [players, setPlayers] = useState();

    useEffect(() => {
        setPlayers(ds.getPlayers());
        console.log('players', players);
    }, []);

    return (
        <div>
            <ul className='player-list'>
                <li className='player-list-row header'>
                    <span className='player-list-cell'>Account number</span>
                    <span className='player-list-cell'>Name</span>
                    <span className='player-list-cell'>PIN</span>
                    <span className='player-list-delete'>
                        <FaTrashAlt
                            color='rgba(0, 0, 0, 0)'
                        />
                    </span>
                </li>
                {players && players.map(player => (
                    <li
                        key={player.accountNumber}
                        className='player-list-row'
                    >
                        <span className='player-list-cell'>{player.accountNumber}</span>
                        <span className='player-list-cell'>{player.name}</span>
                        <span className='player-list-cell'>{player.pin}</span>
                        <span
                            className='player-list-delete'
                            onClick={() => {
                                console.log('delete clicked');
                                ds.deletePlayer(player.id);
                                setPlayers(ds.getPlayers());
                            }}
                        >
                            <FaTrashAlt />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewPlayers;
