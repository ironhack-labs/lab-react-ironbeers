import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="flex-row flex-center beer-header">
      <Link to="/">Home</Link>
    </div>
  )
}

export default Header;