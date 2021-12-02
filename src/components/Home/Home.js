import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="Home">
			<h1>Home</h1>

			<div className="home-card">
				<div>
					<img src="./beers.png" alt="beer"></img>
				</div>
				<div>
					<Link to="/beers"><h3>All Beers</h3></Link>
					<p>It is a long established fact that a reader will be distracted by the readable content of
						a page when looking at its layout. The point of using Lorem Ipsum is that it has
						a more-or-less normal distribution of letters</p>
				</div>
			</div>

			<div className="home-card">
				<div>
					<img src="./random-beer.png" alt="beer"></img>
				</div>
				<div>
					<Link to="/random-beer"><h3>Random Beer</h3></Link>
					<p>It is a long established fact that a reader will be distracted by the readable content of
						a page when looking at its layout. The point of using Lorem Ipsum is that it has
						a more-or-less normal distribution of letters</p>
				</div>
			</div>

			<div className="home-card">
				<div>
					<img src="./new-beer.png" alt="beer"></img>
				</div>
				<div>
					<Link to="/new-beer"><h3>New Beer</h3></Link>
					<p>It is a long established fact that a reader will be distracted by the readable content of
						a page when looking at its layout. The point of using Lorem Ipsum is that it has
						a more-or-less normal distribution of letters</p>
				</div>
			</div>
		</div>
	);
}

export default Home;