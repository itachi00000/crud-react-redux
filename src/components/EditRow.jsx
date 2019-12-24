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
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleUpdate(e) {
    const { id } = this.props;
    const { name, username, email } = this.state;

    if (!name || !name.trim()) return;

    this.props.updateItem(e, { id, name, username, email });
  }

  handleCancel(e) {
    const nullId = null;
    this.props.editItem(e, nullId);
  }

  render() {
    const { name, username, email } = this.state;
    return (
      <tr>
        <td>{this.props.id}</td>
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
            placeholder="0"
            className="form-control"
          />
        </td>
        <td className="btn-group">
          <button
            type="button"
            onClick={this.handleUpdate}
            className="btn btn-primary "
          >
            Update
          </button>
          <button
            type="button"
            onClick={this.handleCancel}
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
