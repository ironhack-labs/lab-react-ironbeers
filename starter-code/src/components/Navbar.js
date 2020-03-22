import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./../images/home-beer.png";

const Nav = styled.nav`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <span>
          <img width="50px" src={logo} />
        </span>
      </Link>
    </Nav>
  );
};

export default Navbar;
