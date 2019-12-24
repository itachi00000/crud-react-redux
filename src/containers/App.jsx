import React from 'react';
import uuid from 'uuid';
// import './App.css';
// import userData from '../products';
import Header from '../components/Header';
import Table from '../components/Table';
// import Scroll from '../components/Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: { isEditing: false, currentId: null },
      users: [],
      searchfield: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDelItem = this.onDelItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userData => this.setState({ users: userData }))
      .catch(error => alert(error.message));
  }

  onSearchChange(e) {
    this.setState({ searchfield: e.target.value });
  }

  onDelItem(e, id) {
    // on editing mode, you cant click delete btn
    if (this.state.status.isEditing) return;

    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  }

  onEditItem(e, id) {
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

  onUpdateItem(e, { id, name, username, email }) {
    // updating the data (users)
    this.setState(prevState => {
      const updatedUsers = prevState.users.map(user => {
        if (user.id === id) {
          // eslint-disable-next-line no-param-reassign
          user = { id, name, username, email };
        }
        return user;
      });
      return { users: updatedUsers };
    });

    // reset the status to default
    this.setState({ status: { isEditing: false, currentId: null } });
  }

  onAddItem(e, { name, username, email, nextId }) {
    const newItem = {
      key: uuid.v4(),
      id: nextId,
      name,
      username,
      email
    };
    this.setState(prevState => {
      return { users: [...prevState.users, newItem] };
    });
  }

  render() {
    const {
      users,
      searchfield,
      status: { isEditing, currentId }
    } = this.state;

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase().trim());
    });

    return (
      <div>
        <Header />
        <Table
          users={filteredUsers}
          searchChange={this.onSearchChange}
          delItem={this.onDelItem}
          addItem={this.onAddItem}
          editItem={this.onEditItem}
          updateItem={this.onUpdateItem}
          editing={isEditing}
          currentId={currentId}
        />
        <div style={{ height: '300px' }} />
      </div>
    );
  }
}

export default App;
