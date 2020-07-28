import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Link to="/">
        <span className="lnr lnr-home"></span>
      </Link>
    </Navbar>
  );
};

export default NavigationBar;
