import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';


const MiNavbar = () => {


    return (

        <Navbar expand="lg" variant="dark" bg="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Navbar>


    
  );
};

export default MiNavbar;