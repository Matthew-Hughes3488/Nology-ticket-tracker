import React from 'react'

type CounterProps = {
    handleIncrement: () => void,
    handleDecrement: () => void
}

export const Counter = ({handleDecrement, handleIncrement} : CounterProps) => {
  return (
    <div className='counter'>
        <h2 className='counter__title'>Counter</h2>
        <p className='counter__tracker'>0</p>
        <p className='counter__increment' onClick={handleIncrement}>+</p>
        <p className='counter__decrement' onClick={handleDecrement}>-</p>
    </div>
  )
}
