import React, { Component } from 'react';
import ChildUsersList from './../ChildUsersList';
import ChildSelectedUsersList from './../ChildSelectedUsersList';

const dbUsers = [
  {
    id: 1,
    // firstName: 'Test1',
    lastName: 'Testovich1',
  },
  {
    id: 2,
    // firstName: 'Test2',
    lastName: 'Testovich2',
  },
  {
    id: 3,
    // firstName: 'Test3',
    lastName: 'Testovich3',
  },
  {
    id: 4,
    // firstName: 'Test4',
    lastName: 'Testovich4',
  },
];

class ParentUsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: dbUsers.map(u => ({ ...u, isSelected: false })),
    };
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <ChildUsersList users={users} setUsers={this.setUsers} />
        <ChildSelectedUsersList users={users} />
      </>
    );
  }
}

export default ParentUsersList;
