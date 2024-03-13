import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
	const [allBeers, setAllBeers] = useState([]);

	useEffect(() => {
		const getBeer = async () => {
			try {
				const res = await axios.get(
					"https://ih-beers-api2.herokuapp.com/beers"
				);
				console.log(res.data);
				setAllBeers(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getBeer();
	}, []);

	if (!allBeers) {
		return <div>loading...</div>;
	}

	return (
		<div className="containerAllBeer">
			{allBeers &&
				allBeers.map((beer) => {
					return (
						<Link key={beer._id} to={`/beers/${beer._id}`}>
							<div className="cardBeer">
								<img src={beer.image_url} alt={beer.name} />
								<div className="beerInfo">
									<h2 className="nameBeer">{beer.name}</h2>
									<p className="infoBeer">{beer.tagline}</p>
									<p className="createBeer">
										<span>Created by: </span>
										{beer.name}
									</p>
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
}

export default AllBeersPage;
