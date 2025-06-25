import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene2B({ onNext }) {
  return (
    <SceneType1
      background="/3.jpg"
      characterName=""
      text="Вы заболтались с подругой, она рассказывала про вчерашнее свидание и ты забыла о времени. Прибежав в библиотеку, ты видишь, что твой новый репетитор выглядит недовольно."
      onNext={onNext}
    />
  );
}

export default Scene2B;
