import React from 'react';
import { Link } from 'react-router-dom';

export default function Back() {
  return (
    <div className="container">
      <Link to="/" type="button" className="btn btn-outline-danger">
        Back Home
      </Link>
    </div>
  );
}
