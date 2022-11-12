import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"

function Header() {
  return (
    <div className="header">        
        <Link to="/"><AiOutlineHome /></Link>
    </div>
  )
}

export default Header;
