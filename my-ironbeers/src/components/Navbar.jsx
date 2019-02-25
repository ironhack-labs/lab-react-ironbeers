import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navbar = () => {
	return (
		<nav className="nav-style">
			<div>
				<NavLink to="/">
					<img src="../../imagenes/home-copia.png" alt="home" />
				</NavLink>
			</div>
		</nav>
	);
};

export default navbar;
