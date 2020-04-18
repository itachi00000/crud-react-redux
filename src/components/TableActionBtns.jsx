import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from './Button';

function TableActionBtns({ delUser, editUser, id }) {
  return (
    <td>
      <div className="btn-group">
        <button type="button" className="btn btn-sm btn-info">
          Read
        </button>

        {/* <Link to={`/read/${id}`}>
          <Button className="btn btn-sm btn-info">Read</Button>
        </Link> */}

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
