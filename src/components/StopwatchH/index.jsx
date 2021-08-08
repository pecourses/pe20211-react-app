import React, { useState, useEffect } from 'react';
import { format, addMilliseconds } from 'date-fns';

function StopwatchH () {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };
  const handleResetClick = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(addMilliseconds(time, 1000));
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  });

  return (
    <div>
      <h2>{format(time, 'HH:mm:ss')}</h2>
      <button onClick={handleStartStopClick}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default StopwatchH;
