import React, { PureComponent } from 'react';

/* написать counter:
 выводить значение (state)
 по нажатию на -/+ уменьшать/увеличивать значение*/
class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.step === nextProps.step;
  // }

  // PureComponent:
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.props.step !== nextProps.step || this.state.count !== nextState.count);
  // }

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
        <button
          onClick={() => {
            this.setState({ count: this.state.count });
          }}>
          0
        </button>
      </>
    );
  }
}
export default Counter;

//PureComponent
//shouldComponentUpdate:
// производит поверхностное сравнение props/state
// state = {
//   count: 0,
//   value: {
//     step: 1,
//   },
// };

// newState = {
//   count: 0,
//   value: {
//     step: 1,
//   },
// };
// 1 значения свойств - примитивы
