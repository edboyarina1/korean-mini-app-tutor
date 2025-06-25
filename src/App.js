import React, { useState } from 'react';
import WelcomeScene from './pages/WelcomeScene';
import IntroScene from './pages/IntroScene';
import Scene1 from './pages/Scene1';
import Scene2 from './pages/Scene2';
import SceneChoice1 from './pages/SceneChoice1';
import Scene2A from './pages/Scene2A';
import Scene2B from './pages/Scene2B';
import Scene3A from './pages/Scene3A';
import Scene3B from './pages/Scene3B';

import './App.css';

function App() {
  const [scene, setScene] = useState('welcome');
  const [userName, setUserName] = useState('');

  const handleStart = (name) => {
    setUserName(name);
    setScene('intro');
  };

  const handleIntroNext = () => {
    setScene('scene1');
  };

  const handleScene1Next = () => {
    setScene('scene2');
  };

  
  const handleScene2Next = () => {
    setScene('sceneChoice1');
  };

  const handleScene3ANext = () => {
    setScene('scene3A');
  };

  
  const handleScene3BNext = () => {
    setScene('scene3B');
  };

  const handleChoice = (nextScene) => {
    setScene(nextScene);
  };

  const handleEnding = () => {
    alert("Это конец демо!");
  };

  return (
    <>
      {scene === 'welcome' && <WelcomeScene onStart={handleStart} />}
      {scene === 'intro' && <IntroScene name={userName} onNext={handleIntroNext} />}
      {scene === 'scene1' && <Scene1 onNext={handleScene1Next} />}
      {scene === 'scene2' && <Scene2 onNext={handleScene2Next} />}
      {scene === 'sceneChoice1' && <SceneChoice1 onSelect={handleChoice} />}
      {scene === 'scene2A' && <Scene2A onNext={handleScene3ANext} />}
      {scene === 'scene2B' && <Scene2B onNext={handleScene3BNext} />}
      {scene === 'scene3A' && <Scene3A name={userName} onNext={handleEnding} />}
      {scene === 'scene3B' && <Scene3B name={userName} onNext={handleEnding} />}
    </>
  );
}

export default App;

