import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene5A2A({ name, onNext }) {
  return (
    <SceneType1
      background="/back.jpg"
      characterName=""
      text={`Все верно! Вы смеетесь и проводите занятие дальше. Йен решает проводить тебя домой. Ты приглашаешь его внутрь.`}
      onNext={onNext}
    />
  );
}

export default Scene5A2A;