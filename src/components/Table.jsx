import React from 'react';
import uuid from 'uuid';
import TableBodyRows from './TableBodyRows';
import SearchField from './SearchField';
import AddRow from './AddRow';
import Warning from './Warning';

function Table({
  users,
  otherProps: { isLoadingRx, isErrorRx, msgRx },
  updateUser,
  delUser,
  addUser,
  editUser,
  editing,
  currentId
}) {
  // nextId is the id at 'addUser row',
  // which will be the id for 'newUser'
  // if there is no data item, set the 'nextId' to 1
  const nextId = users.length ? +users[users.length - 1].id + 1 : 1;
  // checks for alerts or alert msg
  const hasAlert = isLoadingRx || isErrorRx || msgRx;

  return (
    <div className="container-fluid">
      <div className="card mx-auto">
        <div className="card-header text-white bg-info clearfix">
          <div className="row">
            <div className="col">
              <h3>Users Table</h3>
            </div>
            <div className="col">
              <SearchField />
            </div>
          </div>
        </div>
        {hasAlert && (
          <Warning isLoading={isLoadingRx} isError={isErrorRx} msg={msgRx} />
        )}
        <div className="card-body">
          <form>
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
                  users.map((user) => {
                    return (
                      <TableBodyRows
                        key={uuid.v4()}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        updateUser={updateUser}
                        delUser={delUser}
                        editUser={editUser}
                        addUser={addUser}
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

                <AddRow nextId={nextId} addUser={addUser} />
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Table;
