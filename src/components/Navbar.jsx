import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <NavLink to='/'>
        <img src="https://cdn-icons-png.freepik.com/256/6583/6583566.png?semt=ais_hybrid" alt="Logo" />
      </NavLink>
    </div>
  );
}

export default Navbar;
