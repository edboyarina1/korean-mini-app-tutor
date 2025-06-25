import React from 'react';

function SceneType1({ background, characterName, text, onNext }) {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Затемнение фона, если нужно */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Диалоговое окно */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-6 z-10">
        {characterName && (
          <h2 className="text-xl font-bold mb-2 text-red-600">{characterName}</h2>
        )}
        <p className="text-lg">{text}</p>

        <button
          onClick={onNext}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default SceneType1;
