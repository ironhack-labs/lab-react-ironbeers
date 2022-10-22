import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className='navbar navbar-dark bg-primary mb-3'>
      <div className='container'>
        <NavLink className='navbar-brand' to={"/"}>
          Home
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
