import React, { useState } from "react";
import { Square } from '../BoardSquare/Square';
import '../css/styling.css'

export const Board: React.FC = () => {
  
  const [squares, setValue] = useState(Array(9).fill(null));

    const handleClick = (i: number) => {
        const squareVals: string[] = squares.slice();
        squareVals[i] = "X";
        setValue(squareVals);
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  
  const status = "Next player: X";

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
};
