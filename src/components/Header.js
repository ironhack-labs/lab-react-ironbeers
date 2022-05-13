import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section>
      <NavLink to="/">Home |</NavLink>
      <NavLink to="/beers"> All Beers |</NavLink>
      <NavLink to="/random"> Random Beer |</NavLink>
      <NavLink to="/new">Create</NavLink>
    </section>
  );
}

export default Header;
