export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = [
    // ma:0x00001
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]; //gameboard = ma:0x00001
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    console.log(gameBoard);
  }
  
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
