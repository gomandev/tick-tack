import React from "react";
import Box from "../box";
interface IBoardMap {
  value: string;
  onClick: Function;
}
const Board = ({
  boxes,
  onClick,
}: {
  boxes: Array<null>;
  onClick: (i: number) => void;
}) => {
  return (
    <div className="board">
      {boxes.map((value: null, index: number) => {
        return <Box key={index} value={value} onClick={() => onClick(index)} />;
      })}
    </div>
  );
};

export default Board;
