import React, { useState } from 'react';
import * as ds from '../DataStore';
import { SwitchToggle } from './SwitchToggle';
import styles from './styles/Settings.module.css';
import globalStyles from './styles/Global.module.css';

const setAdmin = e => {
    localStorage.setItem('bankerAdmin', JSON.stringify(e.target.value));
};

const Settings = () => {
    const [adminEnabled, setAdminEnabled] = useState();

    const handleCheckoxChange = () => {
        adminEnabled && localStorage.removeItem('bankerAdmin');
        setAdminEnabled(!adminEnabled);
    };
    return (
        <div className={globalStyles.formContainer}>
            <div className={styles.settingsContainer}>
                <h1>Settings</h1>
                <SwitchToggle
                    switchName='use-admin'
                    switchLabel='Enable Admin'
                    handleOnChange={handleCheckoxChange}
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
                            onChange={(e) => setAdmin(e)}
                        />
                    </>
                }
            </div>
        </div>
    );
}

export default Settings;
