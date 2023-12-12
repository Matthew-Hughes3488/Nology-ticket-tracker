import React, { useState } from "react";


export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () =>{
    setCounter(counter + 1)
  }

  const handleDecrement = () =>{
    setCounter(counter - 1)
  }

  return (
    <div className="counter">
      <h2 className="counter__title">Counter</h2>
      <p className="counter__tracker">{counter}</p>
      <p className="counter__increment" onClick={handleIncrement}>
        +
      </p>
      <p className="counter__decrement" onClick={handleDecrement}>
        -
      </p>
    </div>
  );
};
