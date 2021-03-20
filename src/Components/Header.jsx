import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImHome } from 'react-icons/im';

const Header = () => {
  return (
    <div>
      <header
        style={{
          height: '40px',
          width: '100vw',
          backgroundColor: '#00BFFF',
          textAlign: 'center',
        }}
      >
        <NavLink to="/">
          <ImHome className="homeIcon" />
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
