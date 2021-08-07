import React, { Component } from 'react';
import { loadUsers } from '../../api';

class UsersLoader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });

    loadUsers({ page: currentPage })
      .then(data => {
        this.setState({ users: data.results });
      })
      .catch(error => {
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  render () {
    const { users, isError, isFetching } = this.state;

    // if (isError) {
    //   return <div>!!!ERROR!!!</div>;
    // }
    // if (isFetching) {
    //   return <div>Loading...</div>;
    // }
    return (
      <>
        {isError && <div>!!!ERROR!!!</div>}
        {isFetching && <div>Loading...</div>}
        {/* Реализовать обработчики */}
        <button onClick={this.prevPage}>{'<'}</button>
        <button onClick={this.nextPage}>{'>'}</button>
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
