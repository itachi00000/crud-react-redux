import React from 'react';
// import Proptypes from 'prop-types';
import TableActionBtns from './TableActionBtns';
import EditRow from './EditRow';

function TableBodyRows({
  editing,
  currentId,
  id,
  name,
  username,
  email,
  delUser,
  editUser,
  addUser,
  updateUser
}) {
  if (editing && id === currentId) {
    return (
      <EditRow
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
        currentId={currentId}
        id={id}
        name={name}
        username={username}
        email={email}
      />
    );
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username || '-'}</td>
      <td>{email || '-'}</td>
      <TableActionBtns id={id} editUser={editUser} delUser={delUser} />
    </tr>
  );
}

// TableBodyRows.propTypes = {};

export default TableBodyRows;
