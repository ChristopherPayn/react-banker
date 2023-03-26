import { useState } from 'react';
import Splash from './components/Splash';
import AddPlayer from './components/AddPlayer';
import Transaction from './components/Transaction';
import ViewPlayers from './components/ViewPlayers';
import Settings from './components/Settings';
import Nav from './components/Nav';
import TransactionHistory from './components/TransactionHistory';
import './App.css';

function App() {
  const [view, setView] = useState('');

  const changeView = viewName => {
    setView(viewName);
  };

  const renderView = () => {
    switch (view) {
      case 'addPlayer':
        return <AddPlayer />;
      case 'transaction':
        return <Transaction />;
      case 'players':
        return <ViewPlayers changeView={changeView}/>;
      case 'settings':
        return <Settings />;
      case 'history':
        return <TransactionHistory />;
      default:
        return <Splash />
    }
  };

  return (
    <>
      <Nav navigate={changeView} />
      {renderView()}
    </>
  );
}

export default App;
