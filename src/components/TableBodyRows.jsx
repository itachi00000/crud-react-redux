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
  delItem,
  editItem,
  addItem,
  updateItem
}) {
  if (editing && id === currentId) {
    return (
      <EditRow
        addItem={addItem}
        editItem={editItem}
        updateItem={updateItem}
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
      <TableActionBtns id={id} editItem={editItem} delItem={delItem} />
    </tr>
  );
}

// TableBodyRows.propTypes = {};

export default TableBodyRows;
