import React from 'react';

export default function Warning({ isLoading, isError, msg }) {
  return (
    <h4
      className={`alert ${(isLoading || isError) &&
        'alert-danger'} alert-success  text-center mb-0`}
    >
      {(isError || isLoading || msg) && msg}
    </h4>
  );
}
