import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import beersService from "./../../services/beer.service";
import BeerInfo from "./../BeerInfo/BeerInfo";

import "./../BeerInfo/BeerInfo.css";

const BeerDetails = () => {
	const { beerId } = useParams();

	const [beer, setBeer] = useState({});

	const loadBeer = () => {
		beersService
			.getOneBeer(beerId)
			.then(({ data }) => setBeer(data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		loadBeer();
	}, []);

	return (
		<>
			<BeerInfo beer={beer} />
			<Link to="/beers">
				<a className="btn btn-dark mt-3">All beers</a>
			</Link>
		</>
	);
};

export default BeerDetails;
