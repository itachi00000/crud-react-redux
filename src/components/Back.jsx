import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Back() {
  return (
    <div className="container">
      <Link to="/">
        <Button type="button" className="btn btn-outline-danger">
          Back Home
        </Button>
      </Link>
    </div>
  );
}
