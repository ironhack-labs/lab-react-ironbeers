import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import beersService from "../../services/beer.service";
import BeerInfo from "../BeerInfo/BeerInfo";

import "./../BeerInfo/BeerInfo.css";

const BeerDetails = () => {
	const [beer, setBeer] = useState({});

	const loadBeer = () => {
		beersService
			.getRandomBeer()
			.then(({ data }) => setBeer(data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		loadBeer();
	}, []);

	console.log(beer);

	return (
		<>
			<BeerInfo beer={beer} />
			<Link to="/beers">
				<p className="btn btn-dark mt-3">All beers</p>
			</Link>
		</>
	);
};

export default BeerDetails;
