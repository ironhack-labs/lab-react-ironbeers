import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<section className="home">
			<div className="container ">
				<div className="row">
					<div className="col-sm-12">
						<Link className="btn btn-sm btn-outline-dark" to="/beers">
							All Beers
						</Link>
					</div>
					<div className="col-sm-12">
						<Link className="btn btn-sm btn-outline-dark" to="/random-beer">
							Random Beer
						</Link>
					</div>
					<div className="col-sm-12">
						<Link className="btn btn-sm btn-outline-dark" to="/new-beer">
							New Beer
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
