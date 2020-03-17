import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Title, NavbarLinks } from '../styles/Navbar';
import { Beer } from '@styled-icons/typicons';

export const Header = () => {
  return (
    <header>
      <Navbar>
        <div>
          <Link to="/">
            <Beer size="45" />
          </Link>
        </div>
        <Title>IronBeers</Title>
        <NavbarLinks>
          <NavLink
            to="/beers"
            exact
            activeClassName="selected"
            activeStyle={{
              fontWeight: 700,
              borderBottom: '0.1em solid #8bd3dd'
            }}
          >
            Beers List
          </NavLink>
          <NavLink
            to="/beers/new"
            exact
            activeClassName="selected"
            activeStyle={{
              fontWeight: 700,
              borderBottom: '0.1em solid #8bd3dd'
            }}
          >
            Add beer
          </NavLink>
        </NavbarLinks>
      </Navbar>
    </header>
  );
};
