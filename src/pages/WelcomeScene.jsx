import React, { useState } from 'react';
import SceneWrapper from '../components/SceneWrapper';

const WelcomeScene = ({ onStart }) => {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState('');

  const handleNext = () => {
    const trimmed = name.trim();
    if (trimmed) {
      localStorage.setItem('heroineName', trimmed);
      if (onStart) {
        onStart(trimmed);
      }
    }
  };

  return (
    <SceneWrapper title="Добро пожаловать!">
      {!started ? (
        <div className="flex justify-center">
          <button
            onClick={() => setStarted(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Начать
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="mb-4 text-gray-700">Как тебя зовут?</p>
          <input
            type="text"
            placeholder="Введите имя героини..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleNext}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Далее
          </button>
        </div>
      )
    </SceneWrapper>
  );
};

export default WelcomeScene;

