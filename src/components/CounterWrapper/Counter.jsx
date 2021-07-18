import React, { Component } from 'react';

/* написать counter:
 выводить значение (state)
 по нажатию на -/+ уменьшать/увеличивать значение*/
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    this.setState({ count: this.state.count - this.props.step });
  };

  increment = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  render() {
    const { count } = this.state;
    console.log('rerender :>> ');
    return (
      <>
        <div>{count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
export default Counter;
