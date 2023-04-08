import home from "../assets/home.png";
import { NavLink } from "react-router-dom"


function Navbar() {

    return (
     <div>
<NavLink to="/"> <img src={home} alt="" /></NavLink>

     </div>
  )
}

export default Navbar;

