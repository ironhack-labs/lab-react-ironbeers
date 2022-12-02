import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to="/"><AiOutlineHome/></Link>
    </nav>
  )
}

export default Navbar
