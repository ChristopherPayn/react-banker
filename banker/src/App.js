import { useState } from 'react';
import Splash from './components/Splash';
import AddPlayer from './components/AddPlayer';
import Transaction from './components/Transaction';
import ViewPlayers from './components/ViewPlayers';
import Settings from './components/Settings';
import Nav from './components/Nav';
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
        return <ViewPlayers />;
      case 'settings':
        return <Settings />;
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
