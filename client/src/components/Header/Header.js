import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { HeaderWrapper, StyledImg } from './Header.styled' 

export default class Header extends Component {
  render() {
    return (
      <Link to='/'>
        <HeaderWrapper>
            <StyledImg src={require('../../images/home.png')} alt="home__image"/>
        </HeaderWrapper>
      </Link>
    );
  }
}
