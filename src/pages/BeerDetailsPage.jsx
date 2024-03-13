import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardBeer } from "../components/CardBeer";

function BeerDetailsPage() {
	const { beerId } = useParams();
	const [beer, setBeer] = useState([]);
	useEffect(() => {
		const getBeer = async () => {
			try {
				const res = await axios.get(
					`https://ih-beers-api2.herokuapp.com/beers/${beerId}`
				);
				console.log(res.data);
				setBeer(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getBeer();
	}, [beerId]);

	if (!beer) {
		return <div>loading...</div>;
	}

	return <CardBeer beer={beer} />;
}

export default BeerDetailsPage;
