import React from 'react';
import './Chessboard.css';

function Chessboard() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const squares = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const squareColor = (i + j) % 2 === 0 ? 'light' : 'dark';
      squares.push(
        <div key={letters[j] + numbers[i]} className={`square ${squareColor}`}>
          {letters[j] + numbers[i]}
        </div>
      );
    }
  }

  return (
    <div className="chessboard">
      <div className="files">
        {letters.map((letter) => (
          <div key={letter} className="file">
            {letter}
          </div>
        ))}
      </div>
      <div className="ranks">
        {numbers.map((number) => (
          <div key={number} className="rank">
            {number}
          </div>
        ))}
      </div>
      <div className="board">{squares}</div>
    </div>
  );
}

export default Chessboard;
