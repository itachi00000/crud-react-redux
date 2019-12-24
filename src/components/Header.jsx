import React from 'react';
import Clock from './Clock';

function Header() {
  return (
    <div>
      <div className="jumbotron">
        <header>
          <div className="container">
            <h1 className="display-4">CRUD using React</h1>

            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, veniam?
            </p>
            <Clock />
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
