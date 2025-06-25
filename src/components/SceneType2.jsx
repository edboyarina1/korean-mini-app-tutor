import React from 'react';

function SceneType2({ background, characterName, text, choices }) {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-6 z-10">
        {characterName && (
          <h2 className="text-xl font-bold mb-2 text-red-600">{characterName}</h2>
        )}
        <p className="text-lg mb-4">{text}</p>

        <div className="flex flex-col gap-2">
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={choice.onSelect}
              className="bg-black bg-opacity-70 text-white px-6 py-2 rounded hover:bg-opacity-90"
            >
              {choice.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SceneType2;

