import React from 'react';
import SceneType2 from '../components/SceneType2';

function SceneChoice1({ onSelect }) {
  const choices = [
    {
      label: 'Пересмотрю серию Ковбоя Бибопа, все рано делать нечего',
      onSelect: () => onSelect('scene2A'),
    },
    {
      label: 'Перезвоню подруге, может это что то важное ',
      onSelect: () => onSelect('scene2B'),
    },
  ];

  return (
    <SceneType2
      background="/комната.jpg" 
      characterName=""
      text="Занятие через час в библиотеке. Что будешь делать?"
      choices={choices}
    />
  );
}

export default SceneChoice1;
