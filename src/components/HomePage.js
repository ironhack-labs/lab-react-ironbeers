/** @format */

import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";

import { Link } from "react-router-dom";
function HomePage() {
	return (
		<div className="home-page">
			<div>
				<Link to={`/all`}>
					<img src={Beers} alt="all beers" />
					<h1>All Beers</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Link>
			</div>
			<div>
				<Link to={`/all`}>
					<img src={RandomBeer} alt="random" />
					<h1>Random Beer</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Link>
			</div>
			<div>
				<Link to={`/all`}>
					<img src={NewBeer} />
					<h1>New Beer</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
