import React from 'react';
import { connect } from 'react-redux';
// import Proptypes from 'prop-types';

// action
import { searchUser } from '../redux/actions';

// redux state
const mapStateToProps = state => {
  return {
    inputValueRx: state.userReducer.inputValue
  };
};

function SearchField(props) {
  const { inputValueRx, dispatch } = props;

  return (
    <input
      type="search"
      name="search"
      className="form-control w-75"
      value={inputValueRx}
      placeholder="Search..."
      onChange={e => dispatch(searchUser(e.target.value))}
    />
  );
}

export default connect(mapStateToProps)(SearchField);
