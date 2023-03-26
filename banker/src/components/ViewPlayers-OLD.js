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

    useEffect(() => {
        setPlayers(ds.getPlayers());
        setHidePins(ds.isAdminEnabled());
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
                                ds.deletePlayer(player.id);
                                setPlayers(ds.getPlayers());
                            }}
                        >
                            <FaTrashAlt />
                        </span>
                    </li>
                ))}
            </ul>
            <button onClick={() => {
                alert(`${players[0].name}: ${players[0].balance}\n${players[1].name}: ${players[1].balance}`);
            }}>View raw</button>
        </div>
    );
}

export default ViewPlayers;
