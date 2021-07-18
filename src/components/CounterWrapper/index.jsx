import React, { Component } from 'react';
import Counter from './Counter';

/*Добавить step в state
step передавать в Counter
input:range*/

class CounterWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  changeHandle = e => {
    this.setState({ step: Number(e.target.value) });
  };

  render() {
    return (
      <>
        <div>Step: {this.state.step}</div>
        <input
          type="range"
          value={this.state.step}
          onChange={this.changeHandle}></input>
        <Counter step={this.state.step} />
      </>
    );
  }
}

export default CounterWrapper;
