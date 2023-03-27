import React from 'react';
import Square from './Square.js';
import './Chessboard.css';

const Chessboard = ({ board }) => {
  const renderSquare = (i, piece) => (
    <Square key={i} piece={piece} />
  );

  const renderBoard = () => {
    const squares = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const isDark = (i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1);
        squares.push(
          <div className={`square ${isDark ? 'dark' : 'light'}`} key={10 * i + j}>
            {renderSquare(10 * i + j, board[10 * i + j])}
          </div>
        );
      }
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
