import React from 'react';

function SearchField({ searchChange }) {
  return (
    <form>
      <div className="form-group">
        <input
          type="search"
          className="form-control w-75"
          placeholder="Search..."
          onChange={searchChange}
        />
      </div>
    </form>
  );
}

export default SearchField;
