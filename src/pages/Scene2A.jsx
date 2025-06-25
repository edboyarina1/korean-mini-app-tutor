import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene2A({ onNext }) {
  return (
    <SceneType1
      background="/lib1.jpg"
      characterName=""
      text="Тебе стало скучно и ты вышла пораньше. Ты блуждаешь среди учебников, думая о том, что до экзамена и впраду осталось немного... "
      onNext={onNext}
    />
  );
}

export default Scene2A;
