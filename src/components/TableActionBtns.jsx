import React from 'react';
import { Link } from 'react-router-dom';
// import Button from './Button';

function TableActionBtns({ delUser, editUser, id }) {
  return (
    <td>
      <div className="btn-group">
        <Link to={`/read/${id}`} type="button" className="btn btn-sm btn-info">
          Read
        </Link>

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
