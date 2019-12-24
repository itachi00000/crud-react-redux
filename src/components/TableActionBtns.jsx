import React from 'react';
import Button from './Button';

function TableActionBtns({ delUser, editUser, id }) {
  return (
    <td>
      <div className="btn-group">
        <Button className="btn-sm btn-info" label="Read" />
        <button
          onClick={e => editUser(e, id)}
          type="button"
          className="btn btn-sm btn-primary"
        >
          Edit
        </button>

        <button
          onClick={e => delUser(e, id)}
          type="button"
          className="btn btn-sm btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </td>
  );
}

export default TableActionBtns;
