/** @format */
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<div className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/beers">All the beers</NavLink>
			<NavLink to="/random">Choose a random beer</NavLink>
			<NavLink to="/new">Add a New Choice</NavLink>
		</div>
	);
}

export default NavBar;
