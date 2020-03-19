import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0px;
  nav a {
    width: 100%;
    text-align: center;
  }
  i {
    color: #ffffff;
    font-size: 60px;
  }
`;

export const Header = () => {
  return (
    <>
      <StyledNavBar>
        <Navbar bg="dark">
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
        </Navbar>
      </StyledNavBar>
    </>
  );
};
