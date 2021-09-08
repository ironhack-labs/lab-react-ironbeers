import React from 'react';
import './Navbar.css';

import { BsHouseDoorFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Link to="/" className="Navbar">
      <BsHouseDoorFill className="Navbar__icon" />
    </Link>
  );
}
