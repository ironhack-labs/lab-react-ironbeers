import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <nav className='navbar-text navbar-dark bg-primary mb-3'>
      <div className='container'>
        <NavLink className='navbar-brand' to={"/"}>
          <AiFillHome />
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
