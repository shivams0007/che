import React from 'react';
import Square from './Square.js';
import './Chessboard.css';

const Chessboard = ({ board }) => {
  const renderSquare = (i, piece) => (
    <Square key={i} piece={piece} />
  );

  const renderBoard = () => {
    const squares = [];
    for (let i = 0; i < 100; i++) {
      const row = Math.floor(i / 10);
      const col = i % 10;
      const isDark = (row % 2) ^ (col % 2);
      squares.push(
        <div className={`square ${isDark ? 'dark' : 'light'}`} key={i}>
          {renderSquare(i, board[i])}
        </div>
      );
    }
    return squares;
  };

  return (
    <div className="chessboard">
      {renderBoard()}
    </div>
  );
};

export default Chessboard;
