import React from "react";
import { useParams } from "react-router-dom";

const BeerDetails = ({ beers }) => {
  const { id } = useParams();
  console.log(id)
  const foundBeer = beers.find((singleBeer) => {
    return singleBeer._id === id;
  });
  return (
    <div>
      {foundBeer && (
        <>
          <h1 className="p-5">{foundBeer.namen}</h1>
          <h1>Brewed: {foundBeer.first_brewed}</h1>
          <h1>Level: {foundBeer.attenuation_level}</h1>
       
        </>
          )}
      )
    </div>
  );
};

export default BeerDetails;