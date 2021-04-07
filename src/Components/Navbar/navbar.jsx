import React from 'react';
import './navbar.css';
import House from '../../assets/home.png';

const navbar = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className=" container justify-content-center ">
          <a className="text-white  " href="/">
            <img src={House} height="30" alt="home" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
