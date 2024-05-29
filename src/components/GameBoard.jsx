import { useState } from "react";

export default function GameBoard() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
const [gameBoard, setGameBoard] = useState(initialGameBoard)
  function handleSelectSquare(rowIndex,colIndex){
    setGameBoard((prevGameBoard)=>{
        prevGameBoard[rowIndex]
    })
  }
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
                
              <li key={colIndex}>
                <button onClick={handleSelectSquare}>{playerSymbol}{console.log(colIndex,'a')}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
