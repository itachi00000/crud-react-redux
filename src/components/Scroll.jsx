import React from 'react';

function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid dotted',
        height: '300px'
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
