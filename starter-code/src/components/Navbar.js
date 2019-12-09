import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-primary' style={{ width: '100%' }}>
			<div className='container d-flex justify-content-center'>
				<Link className='navbar-brand' to={'/'}>
					<img src='/images/home-icon-silhouette.png' alt='Home' />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
