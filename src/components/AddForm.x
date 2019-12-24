import React from 'react';

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      first: '',
      last: ''
    };

    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.onAddChange = this.onAddChange.bind(this);
  }

  onSubmitItem(e) {
    e.preventDefault();
    if (!this.state.item) {
      console.log('enter');
      return;
    }
    this.props.addItem(this.state.item);
    this.setState({ item: '' });
  }

  onAddChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitItem}>
        <label htmlFor="item" className="col-form-label">
          Item
        </label>
        <input
          className="form-control"
          type="text"
          name="item"
          placeholder="Enter Name Item.."
          value={this.state.item}
          onChange={this.onAddChange}
        />

        <input
          type="submit"
          className="form-control btn-success"
          value="Submit"
        />
      </form>
    );
  }
}

export default AddForm;
