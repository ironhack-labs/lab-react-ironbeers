import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-primary mb-3'>
			<Link to={`/`}>
				<div className='navbar-brand'>WikiCountries</div>
			</Link>
		</nav>
	);
};

export default Navbar;
