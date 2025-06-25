import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene4BB({ name, onNext }) {
  return (
    <SceneType1
      background="/back.jpg"
      characterName=""
      text={`Все верно! Вы проводите остаток занятия, хоть времени было не так много, получалось неплохо. Йен предлагает встретиться пораньше на неделе чтобы закрепить результат.`}
      onNext={onNext}
    />
  );
}

export default Scene4BB;