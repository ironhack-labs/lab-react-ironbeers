import React from 'react';
import { Link } from 'react-router-dom';

export default function Heading() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" style={{textDecoration: 'none'}}>HOME</Link>
        </nav>
      </header>

    </div>
  )
}
