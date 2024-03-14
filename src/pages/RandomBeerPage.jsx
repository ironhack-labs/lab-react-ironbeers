import axios from "axios";
import { useEffect, useState } from "react";

import { CardBeer } from "../components/CardBeer";

function RandomBeersPage() {
	const [beer, setBeer] = useState([]);
	useEffect(() => {
		const getBeer = async () => {
			try {
				const res = await axios.get(
					`https://ih-beers-api2.herokuapp.com/beers/random`
				);
				setBeer(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getBeer();
	}, []);

	if (!beer) {
		return <div>loading...</div>;
	}

	return <CardBeer beer={beer} />;
}

export default RandomBeersPage;
