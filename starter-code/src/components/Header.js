import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderHome = styled.div`
  height: 40px;
  background-color: lightblue;
  width: 100%;
  text-align: center;
`;

export const Header = () => (
  <Link to="/">
    <HeaderHome>HOME</HeaderHome>
  </Link>
);
