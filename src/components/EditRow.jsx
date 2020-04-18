import React from 'react';
// import PropTypes from 'prop-types';

export default class EditRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      username: props.username,
      email: props.email
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleUpdateBtn = this.handleUpdateBtn.bind(this);
    this.handleCancelBtn = this.handleCancelBtn.bind(this);
  }

  handleChangeInput(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleUpdateBtn(e) {
    const { id } = this.props;
    const { name, username, email } = this.state;

    this.props.updateUser(e, { id, name, username, email });
  }

  handleCancelBtn(e) {
    const nullId = null;
    this.props.editUser(e, nullId);
  }

  render() {
    const { name, username, email } = this.state;
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <input
            onChange={this.handleChangeInput}
            type="text"
            value={name}
            name="name"
            placeholder="Enter Name"
            className="form-control"
          />
        </td>
        <td>
          <input
            onChange={this.handleChangeInput}
            type="text"
            value={username}
            name="username"
            placeholder="Enter username"
            className="form-control"
          />
        </td>
        <td>
          <input
            onChange={this.handleChangeInput}
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            className="form-control"
          />
        </td>
        <td className="btn-group">
          <button
            type="button"
            onClick={this.handleUpdateBtn}
            className="btn btn-primary "
          >
            Update
          </button>
          <button
            type="button"
            onClick={this.handleCancelBtn}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}

// EditRow.propTypes = {
//   price: PropTypes.number.isRequired
// };
