import React from 'react';

const navHomeBar = () => {
  // Top Home bar
  const navBar = (
    <nav
      className="navbar navbar-light bg-primary"
      style={{ backgroundColor: 'light-blue', justifyContent: 'center' }}
    >
      <a href="/home">
        <img
          src="/images/home.png"
          alt=""
          style={{ witdh: '30px', height: '30px' }}
        />
      </a>
    </nav>
  );
  return navBar;
};

export default navHomeBar;
