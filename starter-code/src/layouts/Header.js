import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../../public/images/beer.svg";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 900;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
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
