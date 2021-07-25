import React from 'react';
import { UserContext } from './../../contexts';
import styles from './UserPageSidebar.module.scss';

function UserPageSidebar() {
  return (
    <UserContext.Consumer>
      {({ firstName, lastName, src }) => {
        return (
          <div className={styles.sidebarContainer}>
            <span>{firstName}</span>
            <span>{lastName}</span>
            <img src={src} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default UserPageSidebar;
