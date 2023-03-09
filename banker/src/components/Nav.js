import React from "react";
import { FiSettings } from 'react-icons/fi';
import styles from './styles/Nav.module.css';

const Nav = ({ navigate }) => {

    const updateActive = (e, location) => {
        document.querySelectorAll('nav > div').forEach(div => {
            div.classList.remove(styles.navActive);
        });
        e.target.classList.add(styles.navActive);
        navigate(location);
    };

    return (
        <nav>
            <div onClick={(e) => updateActive(e, 'addPlayer')}>Add Player</div>
            <div onClick={(e) => updateActive(e, 'transaction')}>Transactions</div>
            <div onClick={(e) => updateActive(e, 'players')}>View Players</div>
            <div onClick={(e) => updateActive(e, 'settings')}>
                <FiSettings
                    color='rgba(0, 0, 0, 1)'
                />
            </div>
        </nav>

    )
};

export default Nav;
