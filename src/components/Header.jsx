import React from 'react';
import Clock from './Clock';

function Header() {
  return (
    <header className="jumbotron">
      <div className="container">
        <h1 className="display-4">CRUD using React</h1>

        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          veniam?
        </p>
        <Clock />
      </div>
    </header>
  );
}

export default Header;
