import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-primary mb-3'>
			<div className='container'>
				<Link className='navbar-brand' to={'/'}>
					Home
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
