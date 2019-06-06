import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer }) => {
	console.log(beer);
	return (
		<div className="col-lg-4 col-md-4 col-sm-6">
			{/* el grid siempre aparte */}
			<article className="beer-card">
				<figure>
					<img className="beer-img" src={beer.image_url} alt="" />
				</figure>
				{/* <h5 className="card-title">{beer.name}</h5> */}
				<figcaption>
					<h4>{beer.name}</h4>
					<p>{beer.tagline}</p>
					<p>{beer.contributed_by}</p>
					<Link className="btn btn-sm btn-outline-dark" to={`/${beer._id}`}>
						Ver detalle
					</Link>
				</figcaption>
			</article>
		</div>
	);
};

export default BeerCard;
