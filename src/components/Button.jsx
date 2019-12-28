import React from 'react';

function Button(props) {
  const { children, ...otherProps } = props;
  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
