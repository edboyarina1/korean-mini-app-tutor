import React from 'react';

function IntroScene({ name }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">Привет, {name}!</h1>
      <p className="text-lg">Ты готова к своему первому уроку с репетитором?</p>
    </div>
  );
}

export default IntroScene;