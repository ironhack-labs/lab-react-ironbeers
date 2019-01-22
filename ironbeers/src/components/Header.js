import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'



const HeaderPath = styled.div`
    background-color: #59c3f7;
    width: 100%;
    height: 70px;
    content-align: center
`

const HeaderLogo = styled.img`
    width: 50px;
    height: 50px;
    padding-top: 10px;
`


export default class Header extends Component {
  render() {
    return (
      <HeaderPath>
        <Link to="/"> <HeaderLogo src="https://png.pngtree.com/svg/20161111/home_white_1319461.png" /> </Link>
      </HeaderPath>
    );
    }
}