import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <NavLink to="/">
      <div className="nav-bar">🏠</div>
    </NavLink>
  );
}

export default NavBar;
