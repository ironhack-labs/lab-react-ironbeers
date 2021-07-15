import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar bg="secondary">
      <NavLink
        to="/"
        className="nav-link"
        style={{
          display: 'block',
          width: '100%',
          color: 'white',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}
      >
        {/* <Image src={'./../../assets/home_black_24dp.svg'} /> */}
        <span>Home</span>
      </NavLink>
    </Navbar>
  );
}

export default NavbarComponent;
