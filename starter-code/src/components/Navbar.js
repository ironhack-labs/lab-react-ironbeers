import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from './../images/Home-icon.png'

const Nav = styled.nav`
width:100vw;
height:45px;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
background-color:#415DEB;
color:white;
`;


const Navbar = () => {

  return(
    <Nav>
      <Link to="/"><span><img width="40px" src={logo} alt="logo"/></span></Link> 
    </Nav>
  );
}

export default Navbar;