import React, { useState, useEffect } from 'react';

// Выводить значение count в document.titile
// Т.е. document.title = ЗНАЧЕНИЕ;

function CounterH () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = count;
    console.log('DocTitle :>> ', count);
  }, [count]);

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
