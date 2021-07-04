import React, { Component } from 'react';
import ChildUsersList from './../ChildUsersList';
import ChildSelectedUsersList from './../ChildSelectedUsersList';

class ParentUsersList extends Component {
  render() {
    return (
      <>
        <ChildUsersList />
        <ChildSelectedUsersList />
      </>
    );
  }
}

export default ParentUsersList;
