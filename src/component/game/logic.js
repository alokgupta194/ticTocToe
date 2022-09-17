import "./style.scss";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

import SquareComponent from "./squareComponent.js";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

export default function Logic() {
  const [gameState, updateGameState] = useState(clearState);
  const [isXChance, updateIsXChance] = useState(false);

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(clearState);
  };
  
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`Ta da ! ${winner} won the Game !`);
    }
  });


  return (
    <div className="app-header">
      <div className="row">
        <div className="col center"  onClick={()=> onUserClicked(0)}>
          <SquareComponent state={gameState[0]}/>
        </div>
        <div className="col center" onClick={()=> onUserClicked(1)} >
          <SquareComponent state={gameState[1]} />
        </div>
        <div className="col center" onClick={()=> onUserClicked(2)}>
          <SquareComponent state={gameState[2]} />
        </div>
      </div>
      <div className="row">
        <div className="col center" onClick={()=> onUserClicked(3)}>
          <SquareComponent state={gameState[3]} />
        </div>
        <div className="col center" onClick={()=> onUserClicked(4)}>
          <SquareComponent state={gameState[4]} />
        </div>
        <div className="col center" onClick={()=> onUserClicked(5)}>
          <SquareComponent state={gameState[5]} />
        </div>
      </div>
      <div className="row">
        <div className="col center"  onClick={()=> onUserClicked(6)}>
          <SquareComponent state={gameState[6]}/>
        </div>
        <div className="col center" onClick={()=> onUserClicked(7)}>
          <SquareComponent state={gameState[7]} />
        </div>
        <div className="col center" onClick={()=> onUserClicked(8)}>
          <SquareComponent state={gameState[8]} />
        </div>
      </div>
    <div className="button">
        <Button onClick={()=> updateGameState(["", "", "", "", "", "", "", "", "", ""])}> clear Game</Button>
      </div>
    </div>
  );
}
