import React, { useState } from "react";
import { Square } from "../BoardSquare/Square";
import "../css/styling.css";

export const Board: React.FC = () => {
  const [squares, setValue] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setNext] = useState<boolean>(true);

  /** Function to handle when the square class triggers onClick
   *  i.e. a square has been clicked
   *  params: num of square clicked
   */
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    squares[i] = xIsNext ? "X" : "0";
    const squareVals: string[] = squares.slice();
    setValue(squareVals);
    setNext(!xIsNext);
  };

  /** Render a square component on the page
   *  renders with an initial value and is passed a handleClick function
   *  when the square component triggers the handleClick function it's 
   *  changed an re-rendered
   */
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = "Next player: " + (xIsNext ? 'X' : '0');
  }
  
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

  function calculateWinner(squares: string[]) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
};
