import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={require('../assets/Home-icon.svg')} alt="" />
      </Link>
    </div>
  );
}
