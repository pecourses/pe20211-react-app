import React from 'react';
import { UserContext } from './../../contexts';
import styles from './UserPageHeader.module.scss';

function UserPageHeader() {
  return (
    <UserContext.Consumer>
      {user => {
        return (
          <div className={styles.headerContainer}>
            <span>{user.firstName}</span>
            <img src={user.src} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default UserPageHeader;
