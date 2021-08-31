import React from 'react';
import Home from "../assets/Home.svg"

const Navbar = () => {
  return <nav class="d-flex fixed-top flex-row justify-content-center navbar navbar-light bg-primary">
      <a class="navbar-brand" href="#">
          <img src={Home} width="30" height="30" alt="Home"/>
        </a>
  </nav>;
}

export default Navbar
