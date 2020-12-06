import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const header = () => {
  return (
    <header>
      <Link to="/">
        <img src="../images/home.png" />
      </Link>
    </header>
  );
};

export default header;
