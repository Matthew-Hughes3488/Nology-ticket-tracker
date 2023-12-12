import React, { useState } from "react";
import "./Counter.scss"

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () =>{
    setCounter(counter + 1)
  }

  const handleDecrement = () =>{
    if(counter !== 0) setCounter(counter - 1)
  }

  return (
    <section className="counter-container">
      <h2 className="counter-container__title">Counter</h2>
      <p className="counter__decrement" onClick={handleDecrement}>-</p>
      <p className="counter-container__tracker">{counter}</p>
      <p className="counter__increment" onClick={handleIncrement}>+</p>
    </section>
  );
};
