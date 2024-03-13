import { Link } from "react-router-dom";
import LogoHome from "../assets/home-icon.png";

function Navbar() {
	return (
		<div className="containerNavbar">
			<Link to="/">
				<img src={LogoHome} alt="LogoHome" />
			</Link>
		</div>
	);
}

export default Navbar;
