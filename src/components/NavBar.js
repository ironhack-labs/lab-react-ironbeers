import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <NavLink to="/beers">All Beers</NavLink>|
      <NavLink to="/random-beer">Random Beer</NavLink>|
      <NavLink to="/new-beer">New Beer</NavLink>
    </>
  );
};
