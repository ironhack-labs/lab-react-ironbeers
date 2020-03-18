import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../../public/images/beer.svg";

const Box = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #34dde3;
`;

const Image = styled.img`
  width: 50px;
  padding: 10px;
`;

export const Header = () => {
  return (
    <Box>
      <Link to="/">
        <Image src={icon} alt="app icon" />
      </Link>
    </Box>
  );
};
