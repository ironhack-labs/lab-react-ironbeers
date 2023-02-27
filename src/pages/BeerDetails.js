import React from "react";
import { useLoaderData } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";
import { getBeerById } from "../service/services";

export const beerDetailsLoader = async ({ params: { id } }) => {
  const { data: beer } = await getBeerById(id);
  return { beer };
};

function DetailsOfBeer() {
  const { beer } = useLoaderData();
  return <BeerDetails {...beer} />;
}

export default DetailsOfBeer;
