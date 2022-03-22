import Board from "@components/board";
import { calculate } from "@utils/helper";
import { useState } from "react";

const Engine = () => {
  const [past, setPast] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [step, setStep] = useState<number>(0);
  const winner = calculate(past[step]);
  const xO: string = xIsNext ? "X" : "O";
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
    return past.map((_step, move: number) => {
      const desc = move ? `Back to move ${move}` : "Restart";
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
      <div className="outer-wrapper">
        <Board boxes={past[step]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>Past history</h3>
            {renderMoves()}
          </div>
          <h3>{winner ? `Winner: ${winner} 🚀` : `Next Player ${xO}`}</h3>
        </div>
      </div>
    </>
  );
};

export default Engine;
