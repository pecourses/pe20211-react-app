import React from 'react';
import PropTypes from 'prop-types';

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

export const usersPropStructure = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isSelected: PropTypes.bool,
});

UserListItem.propTypes = {
  user: usersPropStructure.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default UserListItem;
