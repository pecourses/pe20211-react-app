import React, { useReducer } from 'react';
import { counterReducer } from '../../reducers';

function CounterWithReducerH () {
  const [{ count, step }, dispatch] = useReducer(counterReducer, {
    count: 0,
    step: 1,
  });

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const changeStep = ({ target: { value } }) => {
    dispatch({ type: 'changeStep', newStep: Number(value) });
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={step} onChange={changeStep} />
    </>
  );
}

export default CounterWithReducerH;
