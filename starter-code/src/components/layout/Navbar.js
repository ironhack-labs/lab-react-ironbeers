import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-primary'>
			<Link className='navbar-brand' to='/'>Home</Link>
		</nav>
	)
}

export default Navbar;