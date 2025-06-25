import React from 'react';

function IntroScene({ name, onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">Привет, {name}!</h1>
      <p className="text-lg mb-6">Ты готова к своему первому уроку с репетитором?</p>
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Далее
      </button>
    </div>
  );
}

export default IntroScene;
