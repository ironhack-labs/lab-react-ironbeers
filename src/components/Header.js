import React from 'react';
import { Link } from 'react-router-dom';
import homePicture from '../assets/img/home.png';

const Header = () => {
  return (
    <>
      <h1>Hi Header</h1>
      <Link to="/">
        <img
          src={homePicture}
          alt="Home sweet home"
          style={{ width: 100, height: 100 }}
        />
      </Link>
    </>
  );
};

export default Header;
