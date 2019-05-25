import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { glyphicon } from 'bootstrap';

export default class Header extends Component {
	render() {
		return (
			<div>
				<header id="header">
					<Link className="glyphicon glyphicon-home" to="/">
						Home
					</Link>
				</header>
			</div>
		);
	}
}
