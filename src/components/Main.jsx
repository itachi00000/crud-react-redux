import React from 'react';
import { connect } from 'react-redux';

import Table from './Table';

// redux action
import {
  deleteUser,
  addUser,
  updateUser,
  fetchAllUsers
} from '../redux/actions';

// redux dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    addUserRx: (user) => dispatch(addUser(user)),
    deleteUserRx: (id) => dispatch(deleteUser(id)),
    updateUserRx: (id) => dispatch(updateUser(id)),
    fetchUsersRx: () => dispatch(fetchAllUsers())
  };
};

// redux states
const mapStateToProps = (state) => {
  return {
    inputValueRx: state.userReducer.inputValue,
    usersRx: state.userReducer.users,
    isLoadingRx: state.userReducer.isLoading,
    isErrorRx: state.userReducer.isError,
    msgRx: state.userReducer.msg
  };
};

// Main Comp
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      status: { isEditing: false, currentId: null },
      alerts: {
        isEmpty: false,
        alertMsg: ''
      }
    };
    this.onDelUser = this.onDelUser.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
    this.onEditUser = this.onEditUser.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    // return ALL Users
    this.props.fetchUsersRx();
  }

  onDelUser(e, id) {
    // on editing mode, you cant click delete btn
    if (this.state.status.isEditing) return;

    this.props.deleteUserRx(id);
  }

  onEditUser(e, id) {
    // toggles the 'isEditing'
    this.setState((prevState) => {
      return {
        status: {
          isEditing: !prevState.status.isEditing,
          currentId: id
        }
      };
    });
  }

  onUpdateUser(e, { id, name, username, email }) {
    if (!name.trim() || !username.trim() || !email.trim()) {
      this.setState((prevState) => {
        return {
          alerts: { ...prevState.alerts, isEmpty: true, alertMsg: 'Enter Text' }
        };
      });
      return;
    }

    // updating the data (users)

    const updatedUsers = this.props.usersRx.map((user) => {
      let newUser = null;
      if (user.id === id) {
        // eslint-disable-next-line no-param-reassign
        newUser = { id, name, username, email };
      }
      return newUser || user;
    });

    // update redux
    this.props.updateUserRx(updatedUsers);

    // reset the status to default
    this.setState({ status: { isEditing: false, currentId: null } });
  }

  onAddUser(e, { name, username, email, nextId }) {
    if (!name.trim() || !username.trim() || !email.trim()) {
      this.setState((prevState) => {
        return {
          alerts: { ...prevState, isEmpty: true, alertMsg: 'Enter Text' }
        };
      });
      return;
    }

    this.props.addUserRx({ id: nextId, name, username, email });
  }

  render() {
    const {
      status: { isEditing, currentId }
    } = this.state;

    const { inputValueRx, usersRx, ...otherProps } = this.props;

    const filteredUsers = usersRx.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(inputValueRx.toLowerCase().trim());
    });

    return (
      <main>
        <Table
          otherProps={otherProps}
          users={filteredUsers}
          delUser={this.onDelUser}
          addUser={this.onAddUser}
          editUser={this.onEditUser}
          updateUser={this.onUpdateUser}
          editing={isEditing}
          currentId={currentId}
        />

        <div style={{ height: '300px' }} />
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
