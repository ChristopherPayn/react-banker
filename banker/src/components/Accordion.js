import React, { useState, useEffect } from 'react';
import * as ds from '../DataStore';
import { FaTrashAlt, FaLock, FaLockOpen } from 'react-icons/fa';
import AccordionItem from './AccordionItem';
import styles from './styles/Accordion.module.css';

const Accordion = ({ changeView }) => {
  const [players, setPlayers] = useState();
  const [hidePrivate, setHidePrivate] = useState();

  useEffect(() => {
    setPlayers(ds.getPlayers());
    setHidePrivate(ds.isAdminEnabled());
  }, []);

  const unlockPins = () => {
    const enteredPassword = prompt("Enter admin password", "");
    if (enteredPassword === null) return;
    if (ds.verifyAdmin(enteredPassword)) {
      setHidePrivate(false);
    } else {
      alert('Incorrect admin password')
    }
  };

  const lockPins = () => {
    if (ds.isAdminEnabled()) setHidePrivate(true);
  };

  const deletePlayer = (id, name) => {
    if (ds.isAdminEnabled() && hidePrivate) {
      alert('Please unlock the Admin Lock to delete players');
    } else {
      const confirmed = window.confirm(`Really delete ${name}?`);
      if (confirmed) {
        ds.deletePlayer(id);
        setPlayers(ds.getPlayers());
      }
    }
  };

  const adminLock = () => {
    return (
      <>
      {ds.isAdminEnabled() && hidePrivate ?
        <FaLock
          className={styles.pinLockIcon}
          onClick={unlockPins}
        />  :
        <FaLockOpen
          className={styles.pinLockIcon}
          title='PINs can be hidden if admin password is enabled in Settings'
          onClick={lockPins}
        />} Admin Lock
        </>
     )
  };

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.lockStatus}>{players && players.length ? adminLock() : 'No players to display'}</div>
        {players && players.map(({ accountNumber, name, balance, pin, id }, i) => (
          <AccordionItem
            playerId={id}
            accountNumber={accountNumber}
            name={name}
            balance={ds.isAdminEnabled() && hidePrivate ? '****' : balance}
            pin={ds.isAdminEnabled() && hidePrivate ? '****' : pin}
            deleteComponent={
              ds.isAdminEnabled() && hidePrivate ?
              '' :
              <span><FaTrashAlt className={styles.playerListDelete} onClick={() => deletePlayer(id, name)}/></span>
            }
            changeView={changeView}
            key={i}
          />
        ))}
      </div>
    </>
  );
}

export default Accordion;
