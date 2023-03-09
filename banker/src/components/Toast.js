import React, { useState, useEffect } from 'react';
import styles from './styles/Toast.module.css';

const messaages = {
    success: 'Player successfully added',
    existsError: 'Player not added. Account number already in use',
    cannotUseError: 'Player not added. This account number cannot be used',
};

const Toast = ({ type }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (Object.keys(messaages).includes(type)) {
            setVisible(true);
            setTimeout(() => {
                setVisible(false)
            }, 4000);
        }
    }, [type]);

    return (
        <div className={`${styles.toast} toast-${type} ${visible ? 'show' : 'hidden'}`}>{messaages[type] || '--'}</div>
    );
}

export default Toast;
