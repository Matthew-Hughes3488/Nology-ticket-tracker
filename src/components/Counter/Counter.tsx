import { useState } from "react";
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
      <button className="counter-container__button counter__button--decrement" onClick={handleDecrement}>-</button>
      <p className="counter-container__tracker">{counter}</p>
      <button className="counter-container__button counter__button--increment" onClick={handleIncrement}>+</button>
    </section>
  );
};
