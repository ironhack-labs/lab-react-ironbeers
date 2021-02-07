import React from 'react';
import './AllBeers.css';
import {Link} from 'react-router-dom';

export default function AllBeers(props) {
	const beersList = props.beerList.map(beer => {
		return (
			<Link to={`/${beer._id}`} key={beer._id}>
				<div className="card mb-3" style={{maxWidth: '540px'}}>
					<div className="row g-0">
						<div className="col-md-4">
							<img className="img-beer" src={beer.image_url}
								 alt={beer.name}/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{beer.name}</h5>
								<p className="card-text"><small
									className="text-muted">{beer.tagline}</small></p>
								<p className="card-text"><small
									className="text-muted">{beer.contributed_by}</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<div>
			{beersList}
		</div>
	);
}