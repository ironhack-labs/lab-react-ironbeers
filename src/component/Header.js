import { NavLink } from "react-router-dom";
import header from '../assets/header.png'

function Header () {
  return (
    <div>
      <NavLink to="/">
          <img src={header} alt='home button' />
      </NavLink>
 
    </div>
  );
}

export default Header;