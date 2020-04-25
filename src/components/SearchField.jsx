import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

const mapStateToProps = state => {
  return {
    inputValueRx: state.userReducer.inputValue
  };
};

function SearchField({ searchChange, placeholder, inputValueRx }) {
  return (
    <input
      type="search"
      className="form-control w-75"
      value={inputValueRx}
      placeholder={placeholder}
      onChange={searchChange}
    />
  );
}

SearchField.propTypes = {
  searchChange: Proptypes.func.isRequired,
  placeholder: Proptypes.string
};

SearchField.defaultProps = {
  placeholder: 'Search...'
};

export default connect(mapStateToProps)(SearchField);
