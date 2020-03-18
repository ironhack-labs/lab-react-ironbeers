import React, { useContext } from "react";
import { CountryContext } from "../contexto/beers.Context";

export const DetailsPage = () => {
  const { fetchTAs } = useContext(CountryContext);
  console.log(fetchTAs(), "hdashdlkasndkl");
  return <div>fetchTAs</div>;
};
