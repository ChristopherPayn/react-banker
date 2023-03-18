import React, { useState } from 'react';
import * as ds from '../DataStore';
import styles from './styles/Transaction.module.css';
import globalStyles from './styles/Global.module.css';

const Transaction = () => {
    const [foundFromPlayer, setFoundFromPlayer] = useState(null);
    const [foundToPlayer, setFoundToPlayer] = useState(null);
    const [transactionAmount, setTransactionAmount] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        ds.performTransaction(foundFromPlayer, foundToPlayer, transactionAmount);
    };

    const handleChange = e => {
        const { name: field, value } = e.target;
        switch (field) {
            case 'accountNumberFrom':
                setFoundFromPlayer(ds.getPlayer(value) || null);
                break;
            case 'accountNumberTo':
                setFoundToPlayer(ds.getPlayer(value) || null);
                break;
            case 'transactionAmount':
                setTransactionAmount(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className={globalStyles.formContainer} onSubmit={handleSubmit}>
            <h1 className={`${globalStyles.formHeader} ${styles.header}`} id={styles.transactionsHeader}>Transactions</h1>
            <form className={globalStyles.transactionForm}>
                <h2>From:</h2>
                <label htmlFor='account-number-from'>Account number:</label>
                <input
                    id='account-number-from'
                    type='text'
                    name='accountNumberFrom'
                    placeholder='Enter account number'
                    onChange={handleChange}
                    required
                />
                {foundFromPlayer && (
                    <div>
                        <span>Account belongs to: {foundFromPlayer.name}</span>
                    </div>
                )}
                <hr />
                <h2>To:</h2>
                <label htmlFor='account-number-to'>Account number:</label>
                <input
                    id='account-number-to'
                    type='text'
                    name='accountNumberTo'
                    placeholder='Enter account number'
                    onChange={handleChange}
                    required
                />
                {foundToPlayer && (
                    <div>
                        <span>Account belongs to: {foundToPlayer.name}</span>
                    </div>
                )}
                <hr />
                <h2>Amount:</h2>
                <label htmlFor='transaction-amount'>Amount to be paid:</label>
                <input
                    id='transaction-amount'
                    type='number'
                    name='transactionAmount'
                    placeholder='000'
                    onChange={handleChange}
                    required
                />
                {foundFromPlayer && foundToPlayer && transactionAmount !== 0 &&
                    <div>{foundFromPlayer?.name || ''} will pay {foundToPlayer?.name || ''} the amount of {transactionAmount}</div>
                }
                <button type="submit">Confirm and pay</button>
            </form>
        </div>
    );
}

export default Transaction;
