import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {
  return (
    <div>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
