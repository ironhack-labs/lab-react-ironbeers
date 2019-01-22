import React from "react";
import styled from "@emotion/styled";

const HeaderStyle = styled.div`
margin: 0;
background-color: white;
min-width: 100vw;
heigth: 1vh;
top: 0;
`
const ImageStyle = styled.img`
max-heigth: 10vh;
width: 10vw;
padding: 1vh;
position: relative;
display: block;
margin-left: auto;
margin-right: auto;
`

export const Header = () => {
  return (
    <HeaderStyle>
      <a href="/"><ImageStyle src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84662/preview.svg" /></a>
    </HeaderStyle>
  );
};
