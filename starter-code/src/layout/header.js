import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderSection = styled.header`
  align-content: center;
  background: #3cc4fc;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  i {
    color: #fff;
    font-size: 40px;
  }
`;

export const Header = () => {
  return (
    <HeaderSection>
      <Link to="/">
        <i className="fa fa-home"></i>
      </Link>
    </HeaderSection>
  );
};
