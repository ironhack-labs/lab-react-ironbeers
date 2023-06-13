import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
      <button>Home</button>
      </NavLink>
      <NavLink exact to="/beers">
      <button>Beers</button>
      </NavLink>
      <NavLink exact to="/random-beer">
      <button>Random Beer</button>
      </NavLink>
      <NavLink exact to="/new-beer">
      <button>New Beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
