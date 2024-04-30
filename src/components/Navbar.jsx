import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
  return (
	<nav className="navbar">
		<Link to="/"><img src={homeIcon} alt="home-icon" /></Link>
	</nav>
  )
}

export default Navbar