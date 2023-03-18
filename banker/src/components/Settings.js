import React, { useState, useEffect } from 'react';
import * as ds from '../DataStore';
import { SwitchToggle } from './SwitchToggle';
import styles from './styles/Settings.module.css';
import globalStyles from './styles/Global.module.css';

const setAdmin = e => {
    localStorage.setItem('bankerAdmin', JSON.stringify(e.target.value));
};

const setStartingBalance = e => {
    localStorage.setItem('startingBalance', JSON.stringify(e.target.value));
};

const Settings = () => {
    const [adminEnabled, setAdminEnabled] = useState();

    const handleCheckboxChange = () => {
        adminEnabled && localStorage.removeItem('bankerAdmin');
        setAdminEnabled(!adminEnabled);
    };

    useEffect(() => {
        const retrievedBalance = JSON.parse(localStorage.getItem('startingBalance'));
        const retrievedAdminPassword = JSON.parse(localStorage.getItem('bankerAdmin'));
        const startBal = document.getElementById('starting-balance');
        const adminPass = document.getElementById('admin-password');
        if (startBal && retrievedBalance) {
            startBal.value = retrievedBalance;
        };
        if (adminPass && retrievedAdminPassword) {
            adminPass.value = retrievedAdminPassword;
        };
    }, []);

    return (
        <div className={globalStyles.formContainer}>
            <div className={styles.settingsContainer}>
                <h1>Settings</h1>
                <SwitchToggle
                    switchName='use-admin'
                    switchLabel='Enable Admin'
                    handleOnChange={handleCheckboxChange}
                    isChecked={adminEnabled || ds.isAdminEnabled()}
                />
                <span className={styles.infoText}>
                    (by leaving this unchecked, all PINs will be visible in the View Players section)
                </span>
                <br />
                {
                    (adminEnabled || ds.isAdminEnabled()) &&
                    <>
                        <label htmlFor="admin-password">Admin password: </label>
                        <input
                            type="password"
                            name="admin-password"
                            id="admin-password"
                            onChange={e => setAdmin(e)}
                        />
                    </>
                }
                <br />
                <label htmlFor="starting-balance">Starting balance: </label>
                <input
                    type="number"
                    name="starting-balance"
                    id="starting-balance"
                    onChange={e => setStartingBalance(e)}
                />
            </div>
        </div>
    );
}

export default Settings;
