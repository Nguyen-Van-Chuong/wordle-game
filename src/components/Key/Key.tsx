import React from "react";
import "./key.css";
import { rootState } from "../interface";
import { useDispatch, useSelector } from "react-redux";
import { incPos, setBoard } from "../../redux/boardSlice";
interface IProps {
  letter: string;
}
const Key: React.FC<IProps> = ({ letter }) => {
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  const dispatch = useDispatch();
  const currentRow = Math.floor(position / 5);

  const chooseLetter = () => {
    if (position >= 30) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  };

  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
