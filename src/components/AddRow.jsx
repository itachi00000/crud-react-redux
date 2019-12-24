import React from 'react';

export default class AddRow extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleClick(e) {
    const { nextId, addUser } = this.props;
    const { name, username, email } = this.state;

    if (!name.trim() || !name) return;

    addUser(e, { name, username, email, nextId });
    this.setState({
      name: '',
      username: '',
      email: ''
    });
  }

  render() {
    const { nextId } = this.props;
    const { name, username, email } = this.state;

    return (
      <tr>
        <td>{nextId}</td>
        <td>
          <input
            onChange={this.handleChange}
            type="text"
            value={name}
            name="name"
            placeholder="Enter Name"
            className="form-control"
          />
        </td>
        <td>
          <textarea
            onChange={this.handleChange}
            value={username}
            name="username"
            placeholder="Enter username"
            className="form-control"
            rows="1"
          />
        </td>
        <td>
          <input
            onChange={this.handleChange}
            type="email"
            value={email}
            name="email"
            placeholder="enter email"
            className="form-control"
          />
        </td>
        <td>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-success btn-block"
          >
            Add User
          </button>
        </td>
      </tr>
    );
  }
}
