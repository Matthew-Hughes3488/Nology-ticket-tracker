import React from 'react'

export const Counter = () => {
  return (
    <div className='counter'>
        <h2 className='counter__title'>Counter</h2>
        <p className='counter__tracker'>0</p>
        <p className='counter__increment'>+</p>
        <p className='counter__decrement'>-</p>
    </div>
  )
}
