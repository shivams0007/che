import React, { useState } from 'react';
import GameInfo from './components/GameInfo';
import Chessboard from './components/Chessboard';
import './style.css';

function App() {
  const [gameState, setGameState] = useState({
    board: [
      'wr', 'wk', 'wb', 'wq', 'wk2', 'wb2', 'wk3', 'wr2', '', '',
      'wp', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '',
      'bp', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8', '', '',
      'br', 'bk', 'bb', 'bq', 'bk2', 'bb2', 'bk3', 'br2', '', ''
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
