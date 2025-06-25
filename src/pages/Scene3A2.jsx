import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene3A2({ onNext }) {
  return (
    <SceneType1
      background="/1.jpg"
      characterName=""
      text="Йен Ли угостил тебя кофе. Вы немного поболтали о твоем уровне английского, он очень хочет тебе помочь, но почему тебе кажется, что он выглядит напряженно. Может показалось... Ладно пора начинать."
      onNext={onNext}
    />
  );
}

export default Scene3A2;