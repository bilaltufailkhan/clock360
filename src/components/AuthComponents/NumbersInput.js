import React from "react";

const NumbersInput = () => {
  const [value, setValue] = React.useState(0);

  const onClickPlus = () => {
    setValue(value + 1);
  };

  const onClickMinus = () => {
    setValue(value - 1);
  };

  return (
    <>
      <div className="number__input">
        <button onClick={onClickMinus}>-</button>
        <p>{value}</p>
        <button onClick={onClickPlus}>+</button>
      </div>
    </>
  );
};

export default NumbersInput;
