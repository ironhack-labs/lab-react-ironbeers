import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBeer, faRandom, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/NavBar.css';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="main mobile">
					<NavLink to="/">
						<FontAwesomeIcon icon={faHome} />
					</NavLink>
				</nav>
				<nav className="main desktop">
					<NavLink to="/">
						<FontAwesomeIcon icon={faHome} /> Home
					</NavLink>
					<NavLink to="/beers">
						<FontAwesomeIcon icon={faBeer} /> All beers
					</NavLink>
					<NavLink to="/random-beer">
						<FontAwesomeIcon icon={faRandom} /> Random beer
					</NavLink>
					<NavLink to="/new-beer">
						<FontAwesomeIcon icon={faPlusCircle} /> New beer
					</NavLink>
				</nav>
			</React.Fragment>
		);
	}
}

export default Header;
