import React from 'react';

const Counter = ({ clicks, count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br /><br />
        <div>Times the increment and decrement buttons have been clicked: { clicks } </div>
        <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted} /><button onClick={onInputNumber}>Change Count</button>
      </div>
    </div>
  );
}

export default Counter;
