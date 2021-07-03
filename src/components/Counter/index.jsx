import React, { Component } from 'react';
// rcc
class Counter extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind(this);
  }

  decrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <div>{counter}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
