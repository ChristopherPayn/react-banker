import React, { useState, useEffect, useRef } from 'react';
import Toast from './Toast';
import * as ds from '../DataStore';

const AddPlayer = () => {
    const [accountDetails, setAccountDetails] = useState({
        id: '',
        accountNumber: '',
        name: '',
        pin: '',
    });
    const [players, setPlayers] = useState([]);
    const [toastType, setToastType] = useState('');
    const nameInputRef = useRef(null);
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
        if (pin.length === 4) {
            const playerAdded = ds.addPlayer(accountDetails);
            setToastType(playerAdded ? 'success' : 'error');
            setPlayers(ds.getPlayers());
            resetForm();
        }
    };

    const resetForm = () => {
        setAccountDetails({
            id: '',
            accountNumber: '',
            name: '',
            pin: '',
        });
        nameInputRef.current.focus();
    };

    return (
        <div className='form-container'>
            {/* TODO: make it so that when adding new player, it checks existing player account numbers so there are no duplicates */}
            <h1>Add a Player</h1>
            <form className='add-player-form' onSubmit={handleSubmit}>
                <label htmlFor='account-number'>Account number:</label>
                <input
                    ref={nameInputRef}
                    id='account-number'
                    type="text"
                    name='accountNumber'
                    value={accountNumber}
                    required
                    onChange={handleInputChange}
                    placeholder="Enter account number"
                />
                <label htmlFor='name'>Name:</label>
                <input
                    id='name'
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                />
                <label htmlFor='pin'>Pin (must be 4 digits):</label>
                <input
                    id='pin'
                    type="number"
                    name='pin'
                    value={pin}
                    min={0}
                    required
                    maxLength={4}
                    onChange={(e => handleInputChange(e, 4))}
                />
                <button type="submit">Add</button>
            </form>
            <Toast
                type={toastType}
            />
            {/* <div>
                <ul>
                    {players.map(player => (
                        <li key={player.accountNumber}>
                            {player.accountNumber}
                            <br />
                            {player.name}
                            <br />
                            {player.pin}
                        </li>
                    ))}
                </ul>
            </div> */}
            {/* <button onClick={() => ds.addPlayer({ accountNumber: '1234567890', name: 'Martif', pin: '1234' })}>Add Player</button> */}
            {/* <button onClick={() => console.log(ds.getPlayers())}>Get Players</button> */}
            <button onClick={() => ds.clearPlayers()} disabled>Clear Players</button>
            {/* <button onClick={() => console.log(ds.accountNumberInUse('123'))}>log all players</button> */}
            {/* <button onClick={() => console.log(ds.getPlayer('1234567890'))}>Get One Player</button> */}
            {/* <button onClick={() => console.log(ds.deletePlayer('af5bee80-9990-4b2a-b448-8a75b94413f5'))}>Delete Player</button> */}
        </div>
    );
}

export default AddPlayer;
