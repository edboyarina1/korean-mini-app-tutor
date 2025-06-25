import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene1({ onNext }) {
  return (
    <SceneType1
      background="/public/заставка.jpg"              // имя файла из public (например, /public/market.jpg)
      characterName="Алиса"
      text="А-а вы не знаете, почему он решил нас всех… разыграть?"
      onNext={onNext}                       // передаётся из App для перехода к следующей сцене
    />
  );
}

export default Scene1;