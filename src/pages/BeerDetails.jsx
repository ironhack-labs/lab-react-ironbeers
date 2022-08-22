import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function BeerDetails() {
	const [beer, setBeer] = useState(null);

	const { id } = useParams();

	const getBeer = async () => {
		try {
			let response = await axios.get(
				`https://ih-beers-api2.herokuapp.com/beers/${id}`
			);
			setBeer(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBeer();
	}, []);

	return (
		<div className="div card w-95 bg-emerald-900 shadow-xl">
			{beer && (
				<>
					<figure className="flex justify-center">
						<img className="w-20" src={beer.image_url} alt="..." />
					</figure>
					<br />
					<h1 className="text-2xl">{beer.name}</h1>
					<br />
					<p>{beer.tagline}</p>
					<br />
					<p>{beer.first_brewed}</p>
					<br />
					<p>{beer.attenuation_level}</p>
					<br />
					<p>{beer.description}</p>
					<p>{beer.contributed_by}</p>
				</>
			)}
		</div>
	);
}

export default BeerDetails;
