import React, { Component } from 'react';
import UserListItem from './UserListItem';

const dbUsers = [
  {
    id: 1,
    firstName: 'Test1',
    lastName: 'Testovich1',
  },
  {
    id: 2,
    firstName: 'Test2',
    lastName: 'Testovich2',
  },
  {
    id: 3,
    firstName: 'Test3',
    lastName: 'Testovich3',
  },
  {
    id: 4,
    firstName: 'Test4',
    lastName: 'Testovich4',
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //users: [1, 2, 3, 4, 5, 6],
      users: dbUsers.map(u => ({ ...u, isSelected: false })),
    };
    this.isSortAsc = true;
  }

  sortUsers = () => {
    const { users } = this.state;
    const newUsers = users.sort((a, b) => {
      if (a.id < b.id) {
        return this.isSortAsc ? -1 : 1;
      }
      if (a.id > b.id) {
        return this.isSortAsc ? 1 : -1;
      }
      return 0;
    });
    this.setState({ users: newUsers });
    this.isSortAsc = !this.isSortAsc;
  };

  mapUser = (user, index) => {
    const { users } = this.state;
    const onClickHandler = () => {
      const newUsers = [...users];
      //const newUsers = JSON.parse(JSON.stringify(users)); //
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({ users: newUsers });
    };

    return (
      <UserListItem key={user.id} user={user} onClickHandler={onClickHandler} />
    );
  };
  //UserListItem({user:user})

  render() {
    const { users } = this.state;
    return (
      <>
        <button onClick={this.sortUsers}>Sort</button>
        <ul>{users.map(this.mapUser)}</ul>
      </>
    );
  }
}

export default UsersList;
