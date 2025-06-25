import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene1({ onNext }) {
  return (
    <SceneType1
      background="/мамакухня.jpg"              // имя файла из public (например, /public/market.jpg)
      characterName="Мама"
      text="Как проходит твоя подготовка к экзамену? Времени остается мало, пора собраться..."
      onNext={onNext}                       // передаётся из App для перехода к следующей сцене
    />
  );
}

export default Scene1;