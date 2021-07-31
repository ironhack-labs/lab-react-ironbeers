import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link to={`/`}>
				<div >Home</div>
			</Link>
		</nav>
	);
};

export default Header;
