import React, { useState } from 'react';
import SceneWrapper from '../components/SceneWrapper';

const WelcomeScene = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem('heroineName', name);
      onStart();
    }
  };

  return (
    <SceneWrapper title="Добро пожаловать!">
      <p className="mb-4 text-gray-700">Как тебя зовут?</p>
      <input
        type="text"
        placeholder="Введи имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        onClick={handleStart}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        Начать
      </button>
    </SceneWrapper>
  );
};

export default WelcomeScene;