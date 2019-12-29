import React from 'react';

import userData from '../users.json';

export default function ReadPage(props) {
  const [{ id, name, username, email }] = userData.filter(
    user => user.id === Number(props.match.params.id)
  );

  return (
    <div className="container text-center">
      <div className="card">
        <h1>
          Hi,
          {username}
          {id}
        </h1>
        <ul style={{ listStyle: 'none' }}>
          <li>
            Name:
            {` ${name}`}
          </li>
          <li>
            Email:
            {` ${email}`}
          </li>
        </ul>
      </div>
    </div>
  );
}
