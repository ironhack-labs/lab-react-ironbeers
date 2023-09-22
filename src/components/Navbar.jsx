import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
  return (
   

<nav className="navbar navbar-dark bg-primary mb-3">
<NavLink to="/">
  <div className="navbar">
    <img src={homeIcon} alt="Home" />
  </div>
</NavLink>
</nav>
   
   
  );
}

export default Navbar;
