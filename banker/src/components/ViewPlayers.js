import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaLock, FaLockOpen } from 'react-icons/fa';
import * as ds from '../DataStore';
import styles from './styles/ViewPlayers.module.css';

const FA_BLACK = 'rgba(0, 0, 0, 0)';
const FA_WHITE = 'rgba(255, 255, 255, 255)';

const ViewPlayers = () => {
    const [players, setPlayers] = useState();
    const [hidePins, setHidePins] = useState();

    const unlockPins = () => {
        const enteredPassword = prompt("Enter admin password", "");
        if (ds.verifyAdmin(enteredPassword)) {
            setHidePins(false);
        } else {
            alert('Incorrect admin password')
        }
    };

    const lockPins = () => {
        if (ds.isAdminEnabled()) setHidePins(true);
    };

    // TODO: get admin password as boolean from local storage and check whether pins are visible or not
    // and if not then allow to enter password to view the pins

    useEffect(() => {
        setPlayers(ds.getPlayers());
        setHidePins(ds.isAdminEnabled());
        // console.log('players', players);
    }, []);

    return (
        <div>
            <ul className={styles.playerList}>
                <li className={styles.playerListRowHeader}>
                    <span className={styles.playerListCell}>Account number</span>
                    <span className={styles.playerListCell}>Name</span>
                    <span className={styles.playerListCell}>
                        PIN {
                            ds.isAdminEnabled() && hidePins ?
                            <FaLock
                                className={styles.pinLockIcon}
                                color={FA_WHITE}
                                onClick={unlockPins}
                            /> :
                            <FaLockOpen
                                className={styles.pinLockIcon}
                                title='PINs can be hidden if admin password is enabled in Settings'
                                color={FA_WHITE}
                                onClick={lockPins}
                        />
                        }
                    </span>
                    <span className={styles.playerListDelete}>
                        <FaTrashAlt
                            color={FA_BLACK}
                        />
                    </span>
                </li>
                {players && players.map(player => (
                    <li
                        key={player.accountNumber}
                        className={styles.playerListRow}
                    >
                        <span className={styles.playerListCell}>{player.accountNumber}</span>
                        <span className={styles.playerListCell}>{player.name}</span>
                        <span className={styles.playerListCell}>
                            {ds.isAdminEnabled() && hidePins ? '****' : player.pin}
                        </span>
                        <span
                            className={styles.playerListDelete}
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
