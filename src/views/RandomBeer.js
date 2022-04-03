import { BeerCard } from "../components/BeerCard/BeerCard";
import { useQuery } from "react-query";
import { getRandomBeer } from "../services/beerApi";

export const RandomBeer = () => {
	const { isLoading, isError, data, error } = useQuery("beers", getRandomBeer);

	if (isLoading) {
		return (
			<div className="spinner-border text-primary mt-4" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return <>{<BeerCard {...data} />}</>;
};
