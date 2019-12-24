import React from 'react';
import Button from './Button';

function TableActionBtns({ delItem, editItem, id }) {
  return (
    <td>
      <div className="btn-group">
        <Button className="btn-sm btn-info" label="Read" />
        <button
          onClick={e => editItem(e, id)}
          type="button"
          className="btn btn-sm btn-primary"
        >
          Edit
        </button>

        <button
          onClick={e => delItem(e, id)}
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
