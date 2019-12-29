// to be added
import React from 'react';
import Proptypes from 'prop-types';

export default function InputField({
  type,
  name,
  value,
  placeholder,
  onChange
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="form-control"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

InputField.propTypes = {
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  onChange: Proptypes.func.isRequired
};

InputField.defaultProps = {
  placeholder: 'default placeholder'
};
