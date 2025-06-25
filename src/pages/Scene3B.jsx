import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene3B({ name, onNext }) {
  return (
    <SceneType1
      background="/репетитор3.jpg"
      characterName="Репетитор"
      text={`Ты должно быть ${name}? Меня зовут Йен Ли. Давай начинать времени у нас немного.`}
      onNext={onNext}
    />
  );
}

export default Scene3B;