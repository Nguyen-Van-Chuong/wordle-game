import { useState } from "react";

import "./App.css";
import Heading from "./components/Heading/Heading";
import Board from "./components/Board/Board";
import { useSelector } from "react-redux";
import { rootState } from "./components/interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board);
  return (
    <>
      <div className="board-container">
        <Heading type={"h1"} text={"Worlde"} />
        <Heading type={"subtitle"} text={"A daily word game"} />
        <div className="board-container">
          <Board board={board}></Board>
        </div>
      </div>
    </>
  );
}

export default App;
