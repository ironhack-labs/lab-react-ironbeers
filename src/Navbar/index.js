import React from 'react';
import Home from "../assets/Home.svg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <nav class="d-flex fixed-top flex-row justify-content-center navbar navbar-light bg-primary">
      <Link to="/" class="navbar-brand">
          <img src={Home} width="30" height="30" alt="Home"/>
        </Link>
  </nav>;
}

export default Navbar
