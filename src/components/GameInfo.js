import React from 'react';

function GameInfo(props) {
  return (
    <div className="game-info">
      <div className="player-names">
        <span className="player1">{props.player1Name}</span>
        <span className="player2">{props.player2Name}</span>
      </div>
      <div className="game-status">{props.gameStatus}</div>
      <div className="moves-history">
        <ul>
          {props.moves?.map((move, index) => (
            <li key={index}>
              <span className="move-number">{index + 1}. </span>
              <span className="move">{move}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GameInfo;
