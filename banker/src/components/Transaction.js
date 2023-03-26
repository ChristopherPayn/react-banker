import React, { useState } from 'react';
import * as ds from '../DataStore';
import { BsBank } from 'react-icons/bs';
import styles from './styles/Transaction.module.css';
import globalStyles from './styles/Global.module.css';

const Transaction = () => {
    const [foundFromPlayer, setFoundFromPlayer] = useState(null);
    const [foundToPlayer, setFoundToPlayer] = useState(null);
    const [transactionAmount, setTransactionAmount] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        ds.performTransaction(foundFromPlayer, foundToPlayer, transactionAmount);
        clearForm();
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

    const populateBank = (target) => {
        const targetInput = document.querySelector(`#account-number-${target}`);
        targetInput.value = 'BANK';
        if (target === 'from') {
            setFoundFromPlayer('BANK');
        } else {
            setFoundToPlayer('BANK');
        }
    };

    const clearForm = () => {
        setFoundFromPlayer(null);
        setFoundToPlayer(null);
        setTransactionAmount(0);
        document.querySelector('#account-number-from').value = '';
        document.querySelector('#account-number-to').value = '';
        document.querySelector('#transaction-amount').value = '';
    };

    return (
        <div className={globalStyles.formContainer} onSubmit={handleSubmit}>
            <h1 className={`${globalStyles.formHeader} ${styles.header}`} id={styles.transactionsHeader}>Transactions</h1>
            <form className={globalStyles.transactionForm}>
                <h2>From:</h2>
                <label htmlFor='account-number-from'>Account number:</label>
                <div className={styles.transactionFormInputContainer}>
                    <input
                        className={styles.transactionFormInput}
                        id='account-number-from'
                        type='text'
                        name='accountNumberFrom'
                        placeholder='Enter account number'
                        onChange={handleChange}
                        required
                    />
                    <div
                        className={styles.transactionFormBank}
                        onClick={() => populateBank('from')}
                    >
                       <span className={styles.transactionFormBankIcon}><BsBank /></span>

                    </div>
                </div>
                {(foundFromPlayer && (
                    <div>
                        <span>Account belongs to: {foundFromPlayer.name || 'the bank'}</span>
                    </div>
                )) || <div>Awaiting input and searching players...</div>}
                <hr />
                <h2>To:</h2>
                <label htmlFor='account-number-to'>Account number:</label>
                <div className={styles.transactionFormInputContainer}>
                    <input
                        className={styles.transactionFormInput}
                        id='account-number-to'
                        type='text'
                        name='accountNumberTo'
                        placeholder='Enter account number'
                        onChange={handleChange}
                        required
                    />
                    <div
                        className={styles.transactionFormBank}
                        onClick={() => populateBank('to')}
                    >
                        <span className={styles.transactionFormBankIcon}><BsBank /></span>
                    </div>
                </div>
                {(foundToPlayer && (
                    <div>
                        <span>Account belongs to: {foundToPlayer.name || 'the bank'}</span>
                    </div>
                )) || <div>Awaiting input and searching players...</div>}
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
                {(foundFromPlayer && foundToPlayer && transactionAmount !== 0 &&
                    <div>{foundFromPlayer?.name || 'The bank'} will pay {foundToPlayer?.name || 'the bank'} the amount of {transactionAmount}</div>
                ) || <div>Awaiting payment amount...</div>}
                <br />
                <button type="submit">Confirm and pay</button>
            </form>
        </div>
    );
}

export default Transaction;
