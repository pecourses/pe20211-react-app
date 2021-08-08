import React, { useState } from 'react';

function CounterH () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const decrement = () => {
    setCount(count - step);
  };

  const increment = () => {
    setCount(count + step);
  };

  const changeStep = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <>
      <div>{count}</div>
      <input type='number' value={step} onChange={changeStep} />
      <br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default CounterH;
