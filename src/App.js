import React, { useState, useEffect } from 'react';
import Food from './components/Food';
import Snake from './components/Snake';

const partSize = 4; // a tela esta dividida em 25 partes de 4%

const getRandleCoordenates = () => {
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
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    //Verifica se uma das teclas direcionais foi apertada
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        default:
          break;
      }
    });
  })


  return (
    <div className="game-screen">
      <Snake snakeParts={snakeParts} />
      <Food foodPosition={foodPosition} />
    </div >
  );
}

export default App;
