import { isThisSecond } from 'date-fns';
import React, { Component } from 'react';

class VeiwPortParams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { w, h } = this.state;
    return (
      <div>
        <p>ViewPort width: {w}</p>
        <p>ViewPort height: {h}</p>
      </div>
    );
  }
}
export default VeiwPortParams;
