// the Box component for the game. it takes in value which could be X or O and change the Styling base on the value, and also an onClick function that handle the click of the boxes.

const Box = ({ value, onClick }: { value: string; onClick: () => void }) => {
  const classname: string = value ? `box ${value}` : "box";
  return (
    <button className={classname} onClick={onClick}>
      {value}
    </button>
  );
};

export default Box;
