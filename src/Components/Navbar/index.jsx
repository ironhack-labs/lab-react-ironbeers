import { NavLink } from "react-router-dom";
import navImg from "../../assets/nav.png";

 
function Navbar() {
 
  return (
    <nav>    
      <div>
        <NavLink to="/">
        <img src={navImg} className="nav-img" onClick="/"/>
        </NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;