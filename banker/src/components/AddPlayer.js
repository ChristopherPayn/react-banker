import React, { useState, useEffect, useRef } from 'react';
import { AccountNumberInput, NameInput, PinInput } from './AddPlayerForm';
import Toast from './Toast';
import * as ds from '../DataStore';
import styles from './styles/AddPlayer.module.css';
import globalStyles from './styles/Global.module.css';

const scannableHint = 'Scan or type account number';

const AddPlayer = () => {
    const [accountDetails, setAccountDetails] = useState({
        id: '',
        accountNumber: window.innerWidth <= 600 ? scannableHint : '',
        name: '',
        pin: '',
    });
    const [players, setPlayers] = useState([]);
    const [toastType, setToastType] = useState('');
    const accNumInputRef = useRef(null);
    const { accountNumber, name, pin } = accountDetails;

    useEffect(() => {
        const retrievedPlayers = localStorage.getItem('players');
        if (retrievedPlayers) {
            setPlayers(JSON.parse(retrievedPlayers));
        }
    }, []);

    const handleInputChange = (e, limit = 0) => {
        const value = limit ? e.target.value.slice(0, limit) : e.target.value;
        setAccountDetails({
            ...accountDetails,
            [e.target.name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (pin.length === 4 && accountNumber !== scannableHint) {
            const playerAdded = ds.addPlayer(accountDetails);
            setToastType(playerAdded ? 'success' : 'existsError');
            setTimeout(() => {
                setToastType('');
            }, 6000);
            setPlayers(ds.getPlayers());
            playerAdded && resetForm();
        } else {
            setToastType('cannotUseError');
            setTimeout(() => {
                setToastType('');
            }, 6000);
        }
    };

    const resetForm = () => {
        setAccountDetails({
            id: '',
            accountNumber: '',
            name: '',
            pin: '',
        });
        accNumInputRef.current.focus();
    };

    return (
        <div className={globalStyles.formContainer}>
            <form className={globalStyles.addPlayerForm} onSubmit={handleSubmit}>
                <h1 className={globalStyles.formHeader}>Add a Player</h1>
                <AccountNumberInput
                    inputRef={accNumInputRef}
                    value={accountNumber}
                    handleInputChange={handleInputChange}
                />
                <NameInput
                    value={name}
                    handleInputChange={handleInputChange}
                />
                <PinInput
                    value={pin}
                    handleInputChange={(e => handleInputChange(e, 4))}
                />
                <button type="submit">Add</button>
                <Toast
                    type={toastType}
                />
            </form>
            <div id={styles.currentPlayers}>
                Current Players:
                <ul>
                    {players.map((player, i) => <li key={i}>{player.name}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default AddPlayer;
