import React, { Component } from 'react';
import './../App.css';

import {
	BrowserRouter,
	Switch,
	Route,
	withRouter,
	Link
} from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<h1
						className="App-title"
						style={{
							fontSize: '50px',
							color: 'white',
							fontFamily: 'monospace'
						}}
					>
						IronBeers{' '}
					</h1>
					<div>
						<img
							src="https://icon-library.net/images/beer-icon-png/beer-icon-png-12.jpg"
							width="40px"
							alt=""
						/>{' '}
					</div>
				</header>

				{/* <p className="App-intro">App.jsx</p> */}
				<Link
					to="/beers"
					style={{
						fontSize: '15px',
						textDecoration: 'none',
						color: 'black',
						fontFamily: 'monospace'
					}}
				>
					-- List Of Beers --{''}
				</Link>

				<Link
					to="/random-beer"
					style={{
						fontSize: '15px',
						textDecoration: 'none',
						color: 'black',
						fontFamily: 'monospace'
					}}
				>
					Random Beer
				</Link>

				<Link
					to="/new-beer"
					style={{
						fontSize: '15px',
						textDecoration: 'none',
						color: 'black',
						fontFamily: 'monospace'
					}}
				>
					-- New Beer--
				</Link>
			</div>
		);
	}
}

export default HomePage;
