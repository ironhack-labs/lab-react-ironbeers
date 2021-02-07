import React from 'react';

export default function BeerDetails(props) {

	const beerFilter = props.beerList.filter(beers => {
		return beers._id === props.match.params.id;
	});
	const beer = beerFilter.map(beer => {
		const {
			image_url: image,
			name,
			tagline,
			first_brewed,
			attenuation_level,
			description,
			contributed_by
		} = beer;
		return (
			<div className="card"
				 style={{width: '18rem'}}
				 key={beer._id}>
				<img src={image} className="card-img-top" alt={name}/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{description}</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{tagline}</li>
					<li className="list-group-item">{first_brewed}</li>
					<li className="list-group-item">{attenuation_level}</li>
				</ul>
				<p className="card-text">
					<small className="text-muted">{contributed_by}</small>
				</p>
			</div>
		);
	});

	return (
		<div>
			{beer}
		</div>
	);
}