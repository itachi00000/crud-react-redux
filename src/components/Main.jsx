import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import userData from '../users.json';
import Table from './Table';

// redux action
import {
  searchUser,
  deleteUser,
  addUser,
  updateUser,
  getUsers
} from '../redux/actions';

// redux dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    getUsersRx: arr => dispatch(getUsers(arr)),
    addUserRx: user => dispatch(addUser(user)),
    deleteUserRx: id => dispatch(deleteUser(id)),
    updateUserRx: id => dispatch(updateUser(id)),
    searchUserRx: query => dispatch(searchUser(query))
  };
};

// redux states
const mapStateToProps = state => {
  return {
    inputValueRx: state.searchReducer.inputValue,
    usersRx: state.userReducer.users
  };
};

// Main Comp
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      status: { isEditing: false, currentId: null },
      alerts: {
        isLoading: false,
        isEmpty: false,
        isError: false,
        alertMsg: ''
      }
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDelUser = this.onDelUser.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
    this.onEditUser = this.onEditUser.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        alerts: { ...prevState.alerts, isLoading: true, alertMsg: 'Loading...' }
      };
    });

    axios
      .get('http://localhost:5000/robots')
      .then(res => {
        this.props.getUsersRx(res.data);
        this.setState(prevState => {
          return {
            alerts: {
              ...prevState.alerts,
              isLoading: true,
              alertMsg: 'Success!!'
            }
          };
        });
      })
      .catch(error =>
        this.setState(prevState => {
          return {
            alerts: {
              ...prevState.alerts,
              isError: true,
              isLoading: false,
              alertMsg: error.message
            }
          };
        })
      );

    setTimeout(() => {
      this.setState(prevState => {
        return {
          alerts: {
            ...prevState.alerts,
            isError: false,
            isLoading: false,
            alertMsg: ''
          }
        };
      });
    }, 1500);
  }

  onSearchChange(e) {
    this.props.searchUserRx(e.target.value);
  }

  onDelUser(e, id) {
    // on editing mode, you cant click delete btn
    if (this.state.status.isEditing) return;

    this.props.deleteUserRx(id);
  }

  onEditUser(e, id) {
    // toggles the 'isEditing'
    this.setState(prevState => {
      return {
        status: {
          isEditing: !prevState.status.isEditing,
          currentId: id
        }
      };
    });
  }

  onUpdateUser(e, { id, name, username, email }) {
    if (!name || !username || !email) {
      this.setState(prevState => {
        return {
          alerts: { ...prevState.alerts, isEmpty: true, alertMsg: 'Enter Text' }
        };
      });
      return;
    }

    // updating the data (users)

    const updatedUsers = this.props.usersRx.map(user => {
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
    if (!name || !username || !email) {
      this.setState(prevState => {
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
      status: { isEditing, currentId },
      alerts
    } = this.state;

    const { inputValueRx, usersRx } = this.props;

    const filteredUsers = usersRx.filter(user => {
      return user.name
        .toLowerCase()
        .includes(inputValueRx.toLowerCase().trim());
    });

    return (
      <main>
        <Table
          users={filteredUsers}
          alerts={alerts}
          searchChange={this.onSearchChange}
          delUser={this.onDelUser}
          addUser={this.onAddUser}
          editUser={this.onEditUser}
          updateUser={this.onUpdateUser}
          editing={isEditing}
          currentId={currentId}
        />
        {/* <Lifecycles /> */}
        <div style={{ height: '300px' }} />
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
