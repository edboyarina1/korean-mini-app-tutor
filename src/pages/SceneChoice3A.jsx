import React from 'react';
import SceneType2 from '../components/SceneType2';

function SceneChoice3A({ onSelect }) {
  const choices = [
    {
      label: 'Начать занятие',
      onSelect: () => onSelect('scene3A1'),
    },
    {
      label: 'Пойти за кофе ',
      onSelect: () => onSelect('scene3A2'),
    },
  ];

  return (
    <SceneType2
      background="/lib2.jpg"
      characterName=""
      text="Может стоит начать занятие пораньше? Так мы успем больше пройти"
      choices={choices}
    />
  );
}

export default SceneChoice3A;
