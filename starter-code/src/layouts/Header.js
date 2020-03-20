import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
position:fixed;
width:100%;
top:0;
background-color:deepskyblue;
height:10vh;
display:flex;
justify-content:center;
img {
    align-self:center;
    height:8vh;
    padding-top:1vh;
}
`

const Header = () => (
    <HeaderStyle>
        <Link to="/"><img src="home.svg" alt="Home icon" /></Link>
    </HeaderStyle>);

export default Header;