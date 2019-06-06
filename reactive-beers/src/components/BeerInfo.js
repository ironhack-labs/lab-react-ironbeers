import React from 'react';
import { Link } from 'react-router-dom';

const BeerInfo = ({ beer }) => {
	console.log(beer);
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<article className="beer-detail">
						<figure>
							<img className="beer-img" src={beer.image_url} alt="" />
						</figure>
						<figcaption>
							<h2>{beer.name}</h2>
							<h4>{beer.tagline}</h4>
							<p>{beer.first_brewed}</p>
							<p>{beer.attenuation_level}</p>
							<p>{beer.description}</p>
							<p>{beer.contributed_by}</p>
							<Link className="btn btn-sm btn-outline-dark" to="/">
								Volver
							</Link>
						</figcaption>
					</article>
				</div>
			</div>
		</div>
	);
};

export default BeerInfo;
