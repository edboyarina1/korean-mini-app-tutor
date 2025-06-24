import React from 'react';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <img
        src="/заставка.jpg"
        alt="Заставка"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="z-10 relative bg-white bg-opacity-70 p-6 rounded-xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать!</h1>
        <p className="text-lg mb-6">Твоя визуальная новелла начинается прямо сейчас...</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Начать
        </button>
      </div>
    </div>
  );
}

export default App;