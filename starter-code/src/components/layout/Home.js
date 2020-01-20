import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home'>
			<Link to="/beers" className="card">
				<img src="/images/beers.png" className="card-img-top" alt="Beers" />
				<div className="card-body">
					<h5 className="card-title">All beers</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</Link>
			<Link to="/beers" className="card">
				<img src="/images/new-beer.png" className="card-img-top" alt="Beers" />
				<div className="card-body">
					<h5 className="card-title">New beer</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</Link>
			<Link to='/random' className="card">
				<img src="/images/random-beer.png" className="card-img-top" alt="Beers" />
				<div className="card-body">
					<h5 className="card-title">Random beer</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</Link>
		</div>
	)
}

export default Home;