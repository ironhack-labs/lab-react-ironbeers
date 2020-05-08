import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/NavBar.css';

class Header extends Component {
	render() {
		return (
			<nav className="main">
				<NavLink to="/">
					<FontAwesomeIcon icon={faHome} />
				</NavLink>
			</nav>
		);
	}
}

export default Header;
