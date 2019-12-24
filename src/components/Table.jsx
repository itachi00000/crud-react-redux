import React from 'react';
import uuid from 'uuid';
import TableBodyRows from './TableBodyRows';
import SearchField from './SearchField';
import AddRow from './AddRow';

function Table({
  users,
  searchChange,
  updateItem,
  delItem,
  addItem,
  editItem,
  editing,
  currentId
}) {
  // if there is no data item, set the 'nextId' to 1
  const nextId = users.length ? +users[users.length - 1].id + 1 : 1;

  return (
    <div className="card mx-auto w-75">
      <div className="card-header text-white bg-info clearfix">
        <div className="row">
          <div className="col">
            <h3>Product Table</h3>
          </div>
          <div className="col">
            <SearchField searchChange={searchChange} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => {
                return (
                  <TableBodyRows
                    key={uuid.v4()}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    updateItem={updateItem}
                    delItem={delItem}
                    editItem={editItem}
                    addItem={addItem}
                    editing={editing}
                    currentId={currentId}
                  />
                );
              })
            ) : (
              <tr>
                <td> </td>
                <td> </td>
                <td colSpan={5}>Sorry, No User Available</td>
              </tr>
            )}

            <AddRow nextId={nextId} addItem={addItem} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
