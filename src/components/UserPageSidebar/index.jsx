import React from 'react';
import { withUser } from '../HOCs';
import { UserContext } from './../../contexts';
import styles from './UserPageSidebar.module.scss';

function UserPageSidebar (props) {
  const { user } = props;
  return (
    <div className={styles.sidebarContainer}>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
      <img src={user.src} />
    </div>
  );
}

export default withUser(UserPageSidebar);

// function UserPageSidebarWithUser() {
//   return (
//     <UserContext.Consumer>
//       {user => {
//         return <UserPageSidebar />;
//       }}
//     </UserContext.Consumer>
//   );
// }
//=================================================
// function UserPageSidebar() {
//   return (
//     <UserContext.Consumer>
//       {user => {
//         return (
//           <div className={styles.sidebarContainer}>
//             <span>{user.firstName}</span>
//             <span>{user.lastName}</span>
//             <img src={user.src} />
//           </div>
//         );
//       }}
//     </UserContext.Consumer>
//   );
// }

// export default UserPageSidebar;
