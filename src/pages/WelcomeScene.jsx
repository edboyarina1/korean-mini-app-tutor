import React, { useState } from 'react';

function WelcomeScene({ onStart }) {
  const [step, setStep] = useState('start');
  const [name, setName] = useState('');

  const handleNext = () => {
    if (step === 'start') {
      setStep('name');
    } else if (step === 'name' && name.trim()) {
      if (onStart) {
        onStart(name.trim());
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <img
        src="/заставка.jpg"
        alt="Заставка"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="z-10 relative bg-white bg-opacity-70 p-6 rounded-xl shadow-xl text-center max-w-md w-full mx-4">
        {step === 'start' && (
          <>
            <h1 className="text-4xl font-bold mb-4">Добро пожаловать!</h1>
            <p className="text-lg mb-6">Твоя история начнется прямо сейчас...</p>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Начать
            </button>
          </>
        )}

        {step === 'name' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Как тебя зовут?</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 rounded px-4 py-2 w-full mb-4"
              placeholder="Имя героини"
            />
            <button
              onClick={handleNext}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Далее
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default WelcomeScene;
