import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene3A({ name, onNext }) {
  return (
    <SceneType1
      background="/lib2.jpg"
      characterName="Незнакомец"
      text={`Привет! Ты случайно не ${name}? Не думал, что ты будешь так рано... Я хотел зайти за кофе перед занятием, хочешь пойти со мной?  Ой извини забыл представиться... Я Йен Ли!`}
      onNext={onNext}
    />
  );
}

export default Scene3A;