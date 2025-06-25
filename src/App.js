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
import SceneChoice3A from './pages/SceneChoice3A';
import Scene3A1 from './pages/Scene3A1choicetest';
import Scene3A2 from './pages/Scene3A2';
import Scene4A1A from './pages/Scene4A1A';
import Scene4A1B from './pages/Scene4A1B';
import Scene4A2 from './pages/Scene4A2choicetest';
import Scene5A1A from './pages/Scene5A1A';
import Scene5A2A from './pages/Scene5A2A';
import Scene5A2B from './pages/Scene5A2B';
import Scene6A2A from './pages/Scene6A2A';
import Scene6A2B from './pages/Scene6A2B';
import Scene4Btest from './pages/Scene4Btest';
import Scene4BA from './pages/Scene4BA';
import Scene4BB from './pages/Scene4BB';

import './App.css';

function App() {
  const [scene, setScene] = useState('welcome');
  const [userName, setUserName] = useState('');

  const goTo = (next) => () => setScene(next);
  const handleStart = (name) => {
    setUserName(name);
    setScene('intro');
  };

  // Обёртка, которая добавляет name всем сценам
  const withName = (Component, props = {}) => (
    <Component {...props} name={userName} />
  );

  return (
    <>
      {scene === 'welcome' && <WelcomeScene onStart={handleStart} />}
      {scene === 'intro' && withName(IntroScene, { onNext: goTo('scene1') })}
      {scene === 'scene1' && <Scene1 onNext={goTo('scene2')} />}
      {scene === 'scene2' && <Scene2 onNext={goTo('sceneChoice1')} />}
      {scene === 'sceneChoice1' && <SceneChoice1 onSelect={setScene} />}
      {scene === 'scene2A' && <Scene2A onNext={goTo('scene3A')} />}
      {scene === 'scene2B' && <Scene2B onNext={goTo('scene3B')} />}

      {/* Ветка 3A */}
      {scene === 'scene3A' && withName(Scene3A, { onNext: goTo('sceneChoice3A') })}
      {scene === 'sceneChoice3A' && <SceneChoice3A onSelect={setScene} />}
      {scene === 'scene3A1' && <Scene3A1 onSelect={setScene} />}
      {scene === 'scene4A1A' && <Scene4A1A onNext={goTo('scene5A1A')} />}
      {scene === 'scene5A1A' && <Scene5A1A onNext={goTo('end')} />}
      {scene === 'scene4A1B' && <Scene4A1B onNext={goTo('end')} />}

      {scene === 'scene3A2' && <Scene3A2 onNext={goTo('scene4A2')} />}
      {scene === 'scene4A2' && <Scene4A2 onSelect={setScene} />}
      {scene === 'scene5A2A' && <Scene5A2A onNext={goTo('scene6A2A')} />}
      {scene === 'scene6A2A' && withName(Scene6A2A, { onNext: goTo('end') })}
      {scene === 'scene5A2B' && <Scene5A2B onNext={goTo('scene6A2B')} />}
      {scene === 'scene6A2B' && withName(Scene6A2B, { onNext: goTo('end') })}

      {/* Ветка 3B */}
      {scene === 'scene3B' && withName(Scene3B, { onNext: goTo('scene4Btest') })}
      {scene === 'scene4Btest' && <Scene4Btest onSelect={setScene} />}
      {scene === 'scene4BA' && <Scene4BA onNext={goTo('end')} />}
      {scene === 'scene4BB' && <Scene4BB onNext={goTo('end')} />}

      {/* Финал */}
      {scene === 'end' && <div className="ending">Это конец демо!</div>}
    </>
  );
}

export default App;
