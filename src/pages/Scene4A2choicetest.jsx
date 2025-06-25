import React from 'react';
import SceneType2 from '../components/SceneType2';

function SceneChoice4A2({ onSelect }) {
  const choices = [
    {
      label: 'A) She made a strong effort to change the subject, but he kept insisting.',
      onSelect: () => onSelect('scene5A2A'),
    },
    {
      label: 'B) She did a strong effort to change the subject, but he kept insisting. ',
      onSelect: () => onSelect('scene5A2B'),
    },
  ];

  return (
    <SceneType2
      background="/репетитор2.jpg"
      characterName="Йен Ли"
      text="Which sentence uses the correct collocation?"
      choices={choices}
    />
  );
}

export default SceneChoice4A2;