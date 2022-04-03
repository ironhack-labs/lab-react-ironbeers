import { useParams } from "react-router";
import { useQuery } from "react-query";
import { BeerDetails } from "../components/BeerDetails/BeerDetails";
import { getBeer } from "../services/beerApi";

export const Beer = () => {
	const { _id } = useParams();

	const { isLoading, isError, data, error } = useQuery(["beers", _id], getBeer);

	if (isLoading)
		return (
			<div className="spinner-border text-primary mt-4" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);

	if (isError) {
		return <span>Error: {error.message}</span>;
  }
  
  console.log(data)

	return <BeerDetails {...data} />;
};
