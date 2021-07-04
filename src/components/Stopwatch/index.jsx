import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };
    this.timerId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      return { time: state.time + 1 };
    });
  };

  // After first render
  componentDidMount() {
    this.start();
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.tick, 1000);
    }
  };
  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };
  reset = () => {
    this.setState({ time: 0 });
  };

  render() {
    const { time } = this.state;

    return (
      <article>
        <div>{time}</div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}
export default Stopwatch;
