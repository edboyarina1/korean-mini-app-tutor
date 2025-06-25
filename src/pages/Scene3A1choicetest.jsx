import React from 'react';
import SceneType2 from '../components/SceneType2';

function SceneChoice3A1({ onSelect }) {
  const choices = [
    {
      label: 'A) She made a strong effort to change the subject, but he kept insisting.',
      onSelect: () => onSelect('scene4A1A'),
    },
    {
      label: 'B) She did a strong effort to change the subject, but he kept insisting. ',
      onSelect: () => onSelect('scene4A1B'),
    },
  ];

  return (
    <SceneType2
      background="/2.jpg"
      characterName="Йен Ли"
      text="Which sentence uses the correct collocation?"
      choices={choices}
    />
  );
}

export default SceneChoice3A1;
