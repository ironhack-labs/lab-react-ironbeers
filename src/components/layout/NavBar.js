import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';
import casita from './images/casa.png';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      < Link to="/"img className="icon" src={casita} /> <Link/>
    </nav>
  );
}

export default Navbar;
