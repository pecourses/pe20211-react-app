import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount() {
    const { currentPage } = this.state;

    this.setState({ isFetching: true });
    fetch(
      `https://randomuser.me/api/?seed=pe2021-1&page=${currentPage}&results=5`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data.results });
      })
      .catch(error => {
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    const { users, isError, isFetching } = this.state;

    if (isError) {
      return <div>!!!ERROR!!!</div>;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <button>{'<'}</button>
        <button>{'>'}</button>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default UsersLoader;
