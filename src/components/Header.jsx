import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3em;
  background: #3dc4fc;
  text-align: center;
  a {
    display: block;
    color: white;
    line-height: 2em;
    font-size: 1.5em;
    i {
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <NavBar className="navbar">
      <Link className="" to="/"><i className="fas fa-home"></i></Link>
    </NavBar>
  );
}

export default Header;
