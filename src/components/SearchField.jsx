import React from 'react';
import Proptypes from 'prop-types';

export default function SearchField({ searchChange, placeholder }) {
  return (
    <input
      type="search"
      className="form-control w-75"
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
