import React, { useState } from 'react';
import Snake from './components/Snake';

function App() {

  const initialSnakeParts = [
    [0,0],
    [4,0],
  ]

  const [snakeParts, setSnakeParts] = useState(initialSnakeParts);

  return (
    <div className="game-screen">
      <Snake snakeParts={snakeParts}/>
    </div >
  );
}

export default App;
