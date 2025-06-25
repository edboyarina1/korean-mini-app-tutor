import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene4A1B({ name, onNext }) {
  return (
    <SceneType1
      background="/tsad.jpg"
      characterName=""
      text={`Глагол "make" используется с существительным "effort" в устойчивом выражении "make an effort". Вы проводите остаток занятия. Йен предлагает встретиться пораньше на неделе чтобы закрепить результат.`}
      onNext={onNext}
    />
  );
}

export default Scene4A1B;