/** @format */

import { Link } from "react-router-dom";

function BeersList({ beers }) {
	if (beers === null) {
		return <p>loading...</p>;
	}
	return (
		<div>
			{beers.map((beer) => {
				return (
					<div key={beer._id} className="beer-card">
						<img
							src={
								beer.image_url?.length
									? beer.image_url
									: "https://placehold.co/400x260?text=No%20photo%20available"
							}
							alt={beer.name}
						/>
						<div className="beer-details">
							<h1>{beer.name}</h1>
							<h2>{beer.tagline}</h2>
							<p>
								<strong>Created by: </strong>
								{beer.contributed_by.split("<")[0].trim()}
							</p>
							<Link to={`/beers/${beer._id}`}>Check it out</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default BeersList;
