import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon"
function Navbar(props) {
  return (
  <div className="container mw-100 p-0">
    <nav className="navbar justify-content-center">
      <div className="">
        <span className="navbar-text ">      
            <NavLink to="/">
            <HomeIcon className="nav-home" />
                    {/* <span className="nav-home"></span> */}
            </NavLink>
        </span>
        </div>
    </nav>    
  </div>        
  );
}
 
export default Navbar;