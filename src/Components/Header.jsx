import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
      <Link to="/"><i className="fas fa-home fa-3x header"></i></Link>
    </div>
  )
}

export default Header
