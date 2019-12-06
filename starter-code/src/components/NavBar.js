import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #32c3ff;
  height: 10vh;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const NavBar = () => {
  return (
    <Nav>
      <Link to={"/"}>
        <span role="img">🏠</span>
      </Link>
    </Nav>
  );
};

export default NavBar;
