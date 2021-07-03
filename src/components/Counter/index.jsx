import React, { Component } from 'react';
// rcc
class Counter extends Component {
  //rconst
  constructor(props) {
    super(props);
    // иммутабельность - сост не изменяется, а заменяется
    this.state = {
      counter: 0,
      step: 1,
    };
    // this.increment = this.increment.bind(this);
  }

  decrement = () => {
    const { counter, step } = this.state;
    this.setState({ counter: counter - step }); // +rerender
  };

  increment = () => {
    const { counter, step } = this.state;
    this.setState({ counter: counter + step }); // +rerender
  };

  changeStep = e => {
    this.setState({ step: Number(e.target.value) });
  };

  render() {
    const { counter, step } = this.state;

    return (
      <>
        <div>{counter}</div>
        <input type="number" value={step} onChange={this.changeStep} />
        <br />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
