import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
	const [beers, setBeers] = useState([]);

	/* const punkApi = "https://ih-beers-api2.herokuapp.com/beers"; */

	const getAllBeers = async () => {
		try {
			let response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers"
			);
			setBeers(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllBeers();
	}, []);

	return (
		<div>
			{beers.map((allBeers) => {
				return (
					<Link to={`/BeerDetails/${allBeers._id}`}>
						<div className="div card w-95 bg-emerald-900 shadow-xl">
							<h1 className="text-2xl">{allBeers.name}</h1>
							<figure className="flex justify-center">
								<img className="w-20" src={allBeers.image_url} alt="..." />
							</figure>
							<h2 className="text-md">{allBeers.tagline}</h2>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Beers;
