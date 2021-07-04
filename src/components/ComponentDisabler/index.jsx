import React, { Component } from 'react';
import Stopwatch from '../Stopwatch';

class ComponentDisabler extends Component {
  //+ дописать компонент, задать состояние isHidden
  //+ по клику на кнопку менять isHidden на противоположное
  // надпись на кнопке менять Hide (если показан и нужно убрать)
  //                          Show  (если убран и нужно показать)
  // в зависимости от isHidden скрывать/показывать Stopwatch
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };
  }

  changeMode = () => {
    const { isHidden } = this.state;
    this.setState({ isHidden: !isHidden });
  };

  render() {
    const { isHidden } = this.state;
    return (
      <>
        <button onClick={this.changeMode}>{isHidden ? 'Show' : 'Hide'}</button>
        {/* {isHidden ? null : <Stopwatch />} */}
        {!isHidden && <Stopwatch />}
      </>
    );
  }
}
export default ComponentDisabler;
