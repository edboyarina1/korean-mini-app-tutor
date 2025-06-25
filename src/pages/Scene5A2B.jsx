import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene5A2B({ name, onNext }) {
  return (
    <SceneType1
      background="/back.jpg"
      characterName=""
      text={`Глагол "make" используется с существительным "effort" в устойчивом выражении "make an effort". Вы смеетесь и проводите занятие дальше. Йен решает проводить тебя домой.`}
      onNext={onNext}
    />
  );
}

export default Scene5A2B;