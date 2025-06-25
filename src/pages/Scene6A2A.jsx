import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene6A2A({ name, onNext }) {
  return (
    <SceneType1
      background="/репетиторлежит.png"
      characterName="Йен"
      text={` ${name}, можно я задам вопрос? Ты знаешь кто я?`}
      onNext={onNext}
    />
  );
}

export default Scene6A2A;