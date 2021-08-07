import React, { Component } from 'react';

class MouseTracker extends Component {
  constructor (props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount () {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render () {
    const { myRender } = this.props;
    return myRender({ ...this.state });
  }
}
export default MouseTracker;
