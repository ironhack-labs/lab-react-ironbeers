import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar navbar-light bg-primary">
			<NavLink className="navlink" exact to="/">
				<img
					className="navlink__image"
					src="./images/house.png"
					alt="home icon"
				/>
			</NavLink>
		</nav>
	);
}
