import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderHome = styled.div`
  height: 40px;
  background-color: #0366d6;
  width: 100%;
  text-align: center;
`;

export const Header = () => (
  <Link to="/">
    <HeaderHome>
      <i className="fa fa-home"></i>
    </HeaderHome>
  </Link>
);
