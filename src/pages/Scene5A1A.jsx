import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene5A1A({ name, onNext }) {
  return (
    <SceneType1
      background="/лежитгрусть.jpg"
      characterName=""
      text={`Йен вернулся к себе. Вдруг  ${name} его узнала... Нет, вроде все прошло спокойно. Может стоит сказать ей в следующий раз... Ох, надо еще сделать новый тест.`}
      onNext={onNext}
    />
  );
}

export default Scene5A1A;