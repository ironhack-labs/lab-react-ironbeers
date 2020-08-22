import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function myNav() {
  return (
    <Navbar
      className="justify-content-center"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href="/">Home</Navbar.Brand>
    </Navbar>
  );
}
