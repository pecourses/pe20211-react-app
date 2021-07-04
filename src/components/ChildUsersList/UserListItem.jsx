import React from 'react';

function UserListItem(props) {
  const {
    user: { id, firstName, lastName, isSelected },
    onClickHandler,
  } = props;

  const liStyle = { backgroundColor: '#CCCCCC' };

  return (
    <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
      ID: "{id}", Fullname: "{firstName} {lastName}"
    </li>
  );
}

export default UserListItem;
