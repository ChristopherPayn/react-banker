import React, { useState, useEffect, useRef } from 'react';


const messaages = {
    error: 'Player not added. Account number already in use',
    success: 'Player successfully added',
};

const Toast = ({type}) => {
    const [visible, setVisible] = useState(false);
    const toastType = useRef(type);
    
    useEffect(() => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false)
        }, 4000);
    }, [toastType]);

    return (
        <div className={`toast toast-${type} ${visible ? 'show' : 'hidden'}`}>{messaages[type]}</div>
    );
}

export default Toast;