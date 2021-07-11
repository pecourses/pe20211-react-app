import React, { Component } from 'react';
import Day from './Day';
import Month from './Month';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { date } = this.state;
    return (
      <article>
        <Day />
        <Month date={date} />
      </article>
    );
  }
}

export default Calendar;
