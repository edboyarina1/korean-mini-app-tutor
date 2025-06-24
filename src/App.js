import React, { useState } from 'react';
import WelcomeScene from './pages/WelcomeScene';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        <div className="text-center mt-20 text-2xl text-purple-700">
           Игра начинается!
        </div>
      ) : (
        <WelcomeScene onStart={() => setStarted(true)} />
      )}
    </>
  );
}

export default App;