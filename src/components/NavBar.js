/** @format */
import { NavLink } from "react-router-dom";

function NavBar({ beers }) {
	// function getRandomIndex(array) {
	// 	let randomIndex = Math.floor(Math.random() * array.length);
	// 	return randomIndex;
	// }

	// let randomIndex = getRandomIndex(beers);
	// console.log(randomIndex);

	return (
		<div className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/beers">All the beers</NavLink>
			<NavLink to="/beers/random">Choose a random beer</NavLink>
			<NavLink to="/new">Add a New Choice</NavLink>
		</div>
	);
}

export default NavBar;
