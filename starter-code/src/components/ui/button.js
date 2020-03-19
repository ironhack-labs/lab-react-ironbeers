import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled(Link)`
  display: block;
  padding: 15px;
  background-color: #111e6c;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: #f5f5f5;
  }
  & > span {
    display: block;
    text-align: center;
  }
`;

const Button = ({ path, children }) => {
  return (
    <Btn to={path}>
      <span>{children}</span>
    </Btn>
  );
};

export default Button;
