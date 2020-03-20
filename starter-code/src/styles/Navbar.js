import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3d2c1;

  a {
    margin-right: 2em;
    text-decoration: none;
    color: #172c66;
  }
`;

export const Title = styled.h1`
  color: #001858;
  font-size: 2rem;
`;

export const NavbarLinks = styled.div`
  a {
    &:hover {
      border-bottom: 0.1em solid #8bd3dd;
    }
    @media (max-width: 425px) {
      display: none;
    }
  }
  svg {
    display: none;
    @media (max-width: 425px) {
      display: initial;
    }
  }
`;
