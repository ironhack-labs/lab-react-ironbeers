import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <>
    <h1>Welcome</h1>
      <NavLink to="/beers">All Beers</NavLink>
      <NavLink to="/random-beer">Random Beer</NavLink>
      <NavLink to="/new-beer">New Beer</NavLink>
    </>
  );
}

export default Homepage;
