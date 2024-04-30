import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
	const [beer, setBeer] = useState(null);
	const { id } = useParams();

	console.log("_id:", id);
	axios
		.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
		.then((response) => {
			const oneBeer = response.data;
			setBeer(oneBeer);
		})
		.catch((error) => console.log(error));

	return (
		<div>
			{beer && (
				<article key={beer.id}>
					<h2>{beer.name}</h2>
					<img src={beer.image_url} alt={beer.name} />
					<p>{beer.tagline}</p>
					<p>Contributed by: {beer.contributed_by}</p>
					<p>Attenuation level: {beer.attenuation_level}</p>
					<p>Description: {beer.description}</p>
					<p>Tips: {beer.brewers_tips}</p>
					<p>First brewed: {beer.first_brewed}</p>
					<p>Expires at: {beer.expireAt}</p>
				</article>
			)}
		</div>
	);
}

export default BeerDetailsPage;