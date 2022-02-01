import homeicon from "../assets/home-icon-white-png-13.png"
import { Link } from "react-router-dom"

const Nav = () => {
  return (<nav className="nav"><Link to="/"><img src={homeicon} alt="home"/></Link></nav>
    
  )
};

export default Nav;
