import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button className="btn btn-light">Home</button>
      </NavLink>
      <NavLink to="/beers">
        <button className="btn btn-light">Beers</button>
      </NavLink>
      <NavLink to="/random-beer">
        <button className="btn btn-light">Random Beer</button>
      </NavLink>
      <NavLink to="/new-beer">
        <button className="btn btn-light">New Beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
