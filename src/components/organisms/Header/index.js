import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import './styles.css';

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <IconContext.Provider
          value={{
            color: 'white',
            className: 'global-class-name',
            size: '2.5em',
          }}
        >
          <div>
            <BsFillHouseDoorFill />
          </div>
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default Header;
