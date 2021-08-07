import React, { useState } from 'react';

// Переписать Counter на хуки (CounterH)
// Можно без step
// count, 2 кнопки: - +

function MouseClickerH () {
  // const state = useState(0);
  // const counter = state[0];
  // const setCounter = state[1];

  const [counter, setCounter] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const [state, setState] = useState({counter:0, x:0, y:0})

  const clickHandler = () => {
    setCounter(counter + 1);
    // counter = counter + 1
  };

  const mouseMoveHandler = e => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onClick={clickHandler}
      onMouseMove={mouseMoveHandler}
      style={{
        height: '100vh',
        border: '2px solid red',
        boxSizing: 'border-box',
      }}
    >
      {counter}
      <br />
      Mouse:{coords.x} {coords.y}
    </div>
  );
}

export default MouseClickerH;
//----------------------------------------------------------------
// import React, { Component } from 'react';

// export default class index extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }
//   const clickHandler = () => {this.setState({counter:counter+1})};
//   render () {
//     return <div></div>;
//   }
// }
