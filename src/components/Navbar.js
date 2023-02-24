import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/beers">
        <button>Beers</button>
      </NavLink>
      <NavLink to="/new">
        <button>New beer</button>
      </NavLink>
      <NavLink to="/random">
        <button>Random beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
