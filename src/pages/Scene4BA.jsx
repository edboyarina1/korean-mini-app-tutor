import React from 'react';
import SceneType1 from '../components/SceneType1';

function Scene4BA({ name, onNext }) {
  return (
    <SceneType1
      background="/going.jpg"
      characterName=""
      text={`Вариант A содержит распространённую ошибку — неправильное использование "would have" в условном предложении третьего типа. В таких конструкциях правильным является "Had he arrived" или "If he had arrived". Вы проводите остаток занятия, оно проходит не очень успешно, может быть на следующей неделе получится лучше.`}
      onNext={onNext}
    />
  );
}

export default Scene4BA;