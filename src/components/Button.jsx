import React from 'react';

function Button(props) {
  const { className, label, children } = props;
  return (
    <button type="button" className={`btn ${className}`}>
      {children || label}
    </button>
  );
}

export default Button;
