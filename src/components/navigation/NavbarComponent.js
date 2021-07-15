import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import homeIcon from './../../assets/home.svg';

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
        <Image
          src={homeIcon}
          style={{ width: '5%', display: 'block', margin: '0 auto' }}
        />
        {/* <span>Home</span> */}
      </NavLink>
    </Navbar>
  );
}

export default NavbarComponent;
