import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeButtonHeader = () => {
  return (
    <div>
      <nav
        style={{ width: '100vw', height: '60px', backgroundColor: '#3DC4FC' }}
      >
        <NavLink exact to="/">
          <i
            style={{ color: 'white', fontSize: '40px', margin: '10px 0' }}
            className="fas fa-home"
          ></i>
        </NavLink>
      </nav>
    </div>
  );
};

export default HomeButtonHeader;
