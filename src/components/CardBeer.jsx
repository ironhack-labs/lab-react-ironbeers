export const CardBeer = ({ beer }) => {
	if (!beer) {
		return <div>loading...</div>;
	}
	return (
		<div className="beerDetails">
			<img src={beer.image_url} alt="Beer" />

			<div className="beerInfoDetail">
				<div className="beerInfoTitle">
					<h2>{beer.name}</h2>
					<p>{beer.tagline}</p>
				</div>
				<div className="beerInfoParr">
					<p>{beer.attenuation_level}</p>
					<p>{beer.first_brewed}</p>
				</div>
			</div>

			<p>{beer.description}</p>
			<p>{beer.contributed_by}</p>
		</div>
	);
};
