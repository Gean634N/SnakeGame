import React, { useState } from 'react';
import Food from './components/Food';
import Snake from './components/Snake';

const getRandleCoordenates = () => {
  const partSize = 4;
  let x = Math.floor(Math.random() * 100 / partSize) * partSize;
  let y = Math.floor(Math.random() * 100 / partSize) * partSize;
  return [x, y]
}

function App() {

  const initialSnakeParts = [
    [0, 0],
    [4, 0],
  ]

  const [snakeParts, setSnakeParts] = useState(initialSnakeParts);
  const [foodPosition, setFoodPosition] = useState(getRandleCoordenates);

  return (
    <div className="game-screen">
      <Snake snakeParts={snakeParts} />
      <Food foodPosition={foodPosition} />
    </div >
  );
}

export default App;
