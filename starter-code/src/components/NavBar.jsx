import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';

export class NavBar extends Component {
	render() {
		return (
			<nav className="main">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/beers">All beers</NavLink>
				<NavLink to="/random-beer">Random beer</NavLink>
				<NavLink to="/new-beer">New beer</NavLink>
			</nav>
		);
	}
}

export default NavBar;
