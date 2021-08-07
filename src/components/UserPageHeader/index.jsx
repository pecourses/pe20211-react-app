import React from 'react';
import { withUser } from '../HOCs';
import { ThemeContext, UserContext } from './../../contexts';
import styles from './UserPageHeader.module.scss';

function UserPageHeader (props) {
  const { user } = props;
  return (
    <div className={styles.headerContainer}>
      <span>{user.firstName}</span>
      <img src={user.src} />
    </div>
  );
}

export default withUser(UserPageHeader);

// function UserPageHeaderWithUser() {
//   return (
//     <UserContext.Consumer>
//       {user => {
//         return <UserPageHeader />;
//       }}
//     </UserContext.Consumer>
//   );
// }

//===============================================

// function UserPageHeader() {
//   return (
//     // <ThemeContext.Consumer>
//     //   {theme => {
//     //     return (
//     <UserContext.Consumer>
//       {user => {
//         return (
//           <div className={styles.headerContainer}>
//             <span>{user.firstName}</span>
//             <img src={user.src} />
//           </div>
//         );
//       }}
//     </UserContext.Consumer>
//     //       );
//     //     }}
//     //   </ThemeContext.Consumer>
//   );
// }

// export default UserPageHeader;
