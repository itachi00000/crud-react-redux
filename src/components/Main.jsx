import React from 'react';
import uuid from 'uuid';

import userData from '../users.json';
import Table from './Table';

// import Lifecycles from './components/lifecycles';

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
      },
      users: userData,
      // users: [],
      searchfield: ''
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
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userData =>
        this.setState(prevState => {
          return {
            users: userData,
            alerts: {
              ...prevState.alerts,
              isLoading: false,
              alertMsg: ''
            }
          };
        })
      )
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
  }

  onSearchChange(e) {
    this.setState({ searchfield: e.target.value });
  }

  onDelUser(e, id) {
    // on editing mode, you cant click delete btn
    if (this.state.status.isEditing) return;

    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
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
    if (!name.trim() || !name) {
      this.setState(prevState => {
        return {
          alerts: { ...prevState, isEmpty: true, alertMsg: 'Enter Text' }
        };
      });
      return;
    }

    // updating the data (users)
    this.setState(prevState => {
      const updatedUsers = prevState.users.map(user => {
        if (user.id === id) {
          // eslint-disable-next-line no-param-reassign
          user = { id, name, username, email };
        }
        return user;
      });
      return {
        users: updatedUsers,
        alerts: { ...prevState, isEmpty: false, alertMsg: 'Enter Text' }
      };
    });

    // reset the status to default
    this.setState({ status: { isEditing: false, currentId: null } });
  }

  onAddUser(e, { name, username, email, nextId }) {
    if (!name.trim() || !name) {
      this.setState(prevState => {
        return {
          alerts: { ...prevState, isEmpty: true, alertMsg: 'Enter Text' }
        };
      });
      return;
    }

    const newUser = {
      key: uuid.v4(),
      id: nextId,
      name,
      username,
      email
    };

    this.setState(prevState => {
      return {
        users: [...prevState.users, newUser],
        alerts: { ...prevState, isEmpty: false, alertMsg: 'Enter Text' }
      };
    });
  }

  render() {
    const {
      users,
      searchfield,
      status: { isEditing, currentId },
      alerts
    } = this.state;

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase().trim());
    });
    console.log('warning');
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

export default Main;
