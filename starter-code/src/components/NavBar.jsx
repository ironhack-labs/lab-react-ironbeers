import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';

export class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="main mobile">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/beers">All beers</NavLink>
					<NavLink to="/random-beer">Random beer</NavLink>
					<NavLink to="/new-beer">New beer</NavLink>
				</nav>
				<nav className="main desktop">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/beers">All beers</NavLink>
					<NavLink to="/random-beer">Random beer</NavLink>
					<NavLink to="/new-beer">New beer</NavLink>
				</nav>
			</React.Fragment>
		);
	}
}

export default NavBar;
