import React, { Component } from 'react';

class DataProvider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch(this.props.fileName) //???
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  // принять откуда грузить
  // принять как рендерить
  // передать данные
  render () {
    const { data, isFetching, error } = this.state;
    // const { render } = this.props;
    // const layout = render({ ...this.state });
    const { children } = this.props;
    const layout = children({ ...this.state });
    return layout;
  }
}

export default DataProvider;
