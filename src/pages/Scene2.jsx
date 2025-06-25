import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene2({ onNext }) {
  return (
    <SceneType1
      background="/mother.jpg"
      characterName="Мама"
      text="Я наняла тебе репитора. Постарайся не грубить ему, он единственный кто согласился в такие короткие тебя подготовить.
      Боже, за что мне это все!"
      onNext={onNext}
    />
  );
}

export default Scene2;
