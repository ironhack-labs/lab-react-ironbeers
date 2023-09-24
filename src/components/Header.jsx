import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HeaderNav = styled.nav`
  background-color: #007bff;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderNav>
      <HomeLink to="/">Home</HomeLink>
    </HeaderNav>
  );
}

export default Header;