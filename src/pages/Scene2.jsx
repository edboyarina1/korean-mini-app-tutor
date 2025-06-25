import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene2({ onNext }) {
  return (
    <SceneType1
      background="/public/заставка.jpg"
      characterName="Катя"
      text="Похоже, это всё было частью его плана…"
      onNext={onNext}
    />
  );
}

export default Scene2;
