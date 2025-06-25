import React, { useState } from 'react';
import WelcomeScene from './pages/WelcomeScene';
import IntroScene from './pages/IntroScene';
import './App.css';

function App() {
  const [scene, setScene] = useState('welcome');
  const [userName, setUserName] = useState('');

  const handleStart = (name) => {
    setUserName(name);
    setScene('intro');
  };

  return (
    <>
      {scene === 'welcome' && <WelcomeScene onStart={handleStart} />}
      {scene === 'intro' && <IntroScene name={userName} />}
    </>
  );
}

export default App;