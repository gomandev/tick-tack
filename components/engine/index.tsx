import Board from "@components/board";
import { calculate } from "@utils/helper";
import { useState } from "react";

const Engine = () => {
  const [past, setPast] = useState([Array(9).fill(null)]);
  console.log("past", past);
  const [xIsNext, setXIsNext] = useState(true);
  const [step, setStep] = useState(0);
  const winner = calculate(past[step]);
  const xO = xIsNext ? "X" : "O";
  const handleClick = (i: number) => {
    const point = past.slice(0, step + 1);
    const current = point[step];
    const squares = [...current];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xO;
    setPast([...point, squares]);
    setStep(point.length);
    setXIsNext(!xIsNext);
  };
  const goTo = (step: number) => {
    setStep(step);
    // find the remainder of step divided by 2 if is divisible by 2 then is o else is x
    setXIsNext(step % 2 === 0);
  };
  const renderMoves = () => {
    return past.map((_step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => goTo(move)}>{desc}</button>
        </li>
      );
    });
  };
  return (
    <>
      <h1>Tick Tac toe</h1>
      <Board boxes={past[step]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>history</h3>
          {renderMoves()}
        </div>
      </div>
      <h3>{winner ? "Winner: " + winner : "Next Player" + xO}</h3>
    </>
  );
};

export default Engine;
