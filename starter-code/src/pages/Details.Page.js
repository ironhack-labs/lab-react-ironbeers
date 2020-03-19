import React, { useContext } from "react";
import { BeersContext } from "../contexto/beers.Context";

export const DetailsPage = () => {
  const { beers } = useContext(BeersContext);
  console.log("Contexto en details page", beers);
  return <div>beers</div>;
};
