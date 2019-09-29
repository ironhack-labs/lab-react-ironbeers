import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <div>
      <Navbar bg="primary">
        <Navbar.Brand
          href="/"
          style={{ fontSize: '3em', color: 'white', textAlign: 'text-center' }}
        >
          Iron Beers 😋
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
