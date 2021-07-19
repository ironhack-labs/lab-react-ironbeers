import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className="nav-style">
			<Link to="/">Home</Link>
		</nav>
	)
}