import React from 'react';
import Week from './../Week';
import { format, getWeeksInMonth } from 'date-fns';

const getWeeks = date => {
  const month = date.getMonth(); //6
  //const firstDayOfMonth =
  const firstWeekOfMonth = 27;
  const weeks = [];

  for (let i = 0; i < getWeeksInMonth(date); i++) {
    weeks.push(firstWeekOfMonth + i);
  }
  return weeks.map(w => <Week week={w} year={date.getFullYear()} />);
};

function Month(props) {
  const { date } = props;
  console.log('date :>> ', date);
  return (
    <section>
      <table>
        {/* Получить месяц и год */}
        <caption>{format(date, 'MMMM y')}</caption>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{getWeeks(date)}</tbody>
      </table>
    </section>
  );
}

export default Month;
