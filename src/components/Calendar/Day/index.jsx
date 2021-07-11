import React from 'react';
import { format } from 'date-fns';

function Day() {
  const currentDate = new Date();
  return (
    <section>
      <div>{format(currentDate, 'eeee')}</div>
      <div>{currentDate.getDate()}</div>
    </section>
  );
}

export default Day;
