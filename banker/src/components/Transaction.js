import React, { useState } from 'react';
import * as ds from '../DataStore';

const Transaction = () => {
    const [foundFromPlayer, setFoundFromPlayer] = useState(null);
    const [foundToPlayer, setFoundToPlayer] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleChange = e => {
        const { name: field, value: accountNumber } = e.target;
        switch (field) {
            case 'accountNumberFrom':
                setFoundFromPlayer(ds.getPlayer(accountNumber) || null);
                break;
            case 'accountNumberTo':
                setFoundToPlayer(ds.getPlayer(accountNumber) || null);
                break;
            default:
                break;
        }
    };

    return (
        <div className='form-container' onSubmit={handleSubmit}>
            <form className='transaction-form'>
                <h1>Transactions</h1>
                <h2>From:</h2>
                <label htmlFor='account-number'>Account number:</label>
                <input
                    id='account-number'
                    type='text'
                    name='accountNumberFrom'
                    placeholder='Enter account number'
                    onChange={handleChange}
                    required
                />
                {foundFromPlayer && (
                    <div>
                        <span>Account number: {foundFromPlayer.accountNumber}</span>
                        <br />
                        <span>Account name: {foundFromPlayer.name}</span>
                        <br />
                        <span>Account pin: {foundFromPlayer.pin}</span>
                    </div>
                )}
                <hr />
                <h2>To:</h2>
                <label htmlFor='account-number'>Account number:</label>
                <input
                    id='account-number'
                    type='text'
                    name='accountNumberTo'
                    placeholder='Enter account number'
                    onChange={handleChange}
                    required
                />
                {foundToPlayer && (
                    <div>
                        <span>Account number: {foundToPlayer.accountNumber}</span>
                        <br />
                        <span>Account name: {foundToPlayer.name}</span>
                        <br />
                        <span>Account pin: {foundToPlayer.pin}</span>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Transaction;
