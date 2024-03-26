import React from "react";
import Square from "../Square/Square";
import "./board.css";
import KeyBoard from "../Keyboard/KeyBoard";
interface IProps {
  board: string[];
}
const Board: React.FC<IProps> = ({ board }) => {
  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
            <>
              <Square key={idx} val={square} squareIdx={idx}></Square>
            </>
          );
        })}
      </div>
      <div className="key-board">
        <KeyBoard />
      </div>
    </>
  );
};

export default Board;
