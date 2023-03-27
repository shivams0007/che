import React, { useState } from 'react';
import GameInfo from './components/GameInfo.js';
import Chessboard from './components/Chessboard.js';
import './style.css';

function App() {
  const [gameState, setGameState] = useState({
    board: [
      'br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br', '', '',
      'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', '', '',
      'wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr', '', ''
    ],
    player: 0,
    moves: []
  });
  
  return (
    <div className="app">
      <GameInfo />
      <Chessboard
        board={gameState.board}
        player={gameState.player}
        moves={gameState.moves}
        setGameState={setGameState}
      />
    </div>
  );
}

export default App;
