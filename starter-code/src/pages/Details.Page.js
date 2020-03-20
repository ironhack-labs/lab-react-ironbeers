import React, { useContext, useState, useEffect } from "react";
import { BeersContext } from "../contexto/beers.Context";
import { Loading } from "../../lib/Loading";
import { DetailsContainer } from "../../public/styles/DetailsPage";

export const DetailsPage = props => {
  const { getBeers, randomBeer } = useContext(BeersContext);

  const [beerRandom, setBeerRandom] = useState({});

  useEffect(() => {
    randomBeer().then(beerRandom => setBeerRandom(beerRandom));
  }, []);

  const beerId = props.match.params.id || beerRandom._id;
  const beer = getBeers(beerId);

  if (!beer) return <Loading />;

  return (
    <DetailsContainer>
      <div className="box-img">
        <img src={beer.image_url} title={beer.name} alt={beer.name} />
      </div>
      <h2>{beer.name}</h2>
      <p>{beer.attenuation_level}</p>
      <h3>{beer.tagline}</h3>
      <p>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </DetailsContainer>
  );
};
