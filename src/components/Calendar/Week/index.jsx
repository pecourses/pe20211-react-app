import React from 'react';
import CalendarDate from './../CalendarDate';

function Week(props) {
  const { week, year } = props;
  return (
    <tr>
      <CalendarDate />
      <CalendarDate />
      <CalendarDate />
      <CalendarDate />
      <CalendarDate />
      <CalendarDate />
      <CalendarDate />
    </tr>
  );
}

export default Week;
