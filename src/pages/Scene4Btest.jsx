import React from 'react';
import SceneType2 from '../components/SceneType2';

function SceneChoice4B({ onSelect }) {
  const choices = [
    {
      label: 'A) If he would have arrived on time, we could have started earlier.',
      onSelect: () => onSelect('scene4BA'),
    },
    {
      label: 'B) Had he arrived on time, we could have started earlier.',
      onSelect: () => onSelect('scene4BB'),
    },
  ];

  return (
    <SceneType2
      background="/репетитор2.jpg"
      characterName="Йен Ли"
      text="Which of the following sentences is grammatically correct and stylistically appropriate in formal writing?"
      choices={choices}
    />
  );
}

export default SceneChoice4B;