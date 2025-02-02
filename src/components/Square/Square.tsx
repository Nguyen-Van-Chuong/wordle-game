import React, { useEffect, useState } from "react";
import "./square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../interface";
interface IProps {
  val: string;
  squareIdx: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Square: React.FC<IProps> = ({ val, squareIdx }) => {
  // redux
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const reduxRow = useSelector((state: rootState) => state.board.row);
  // state
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  let wordLastIndex = 4;
  let currentPos =
    position === 5
      ? wordLastIndex
      : position > 5 && position % 5 === 0
      ? wordLastIndex
      : (position % 5) - 1;

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  useEffect(() => {
    if (correctWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }

    return () => {
      setAlmost(false);
      setCorrect(false);
      setWrong(false);
    };
  }, [val]);

  const status: any =
    Math.floor(squareIdx / 5) < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
    <motion.div animate={val ? "filled" : ""} variants={variants}>
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
