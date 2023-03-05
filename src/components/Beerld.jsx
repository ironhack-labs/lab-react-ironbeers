import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function BeerId({ beers }) {
  const { beerId } = useParams();
  const [thisBeer, setThisBeer] = useState(null);

  const foundBeer = async () => {
    const filteredBeer = await beers.filter((beer) => {
      return beer._id === beerId;
    });
    setThisBeer(filteredBeer[0]);
  };

  useEffect(() => {
    foundBeer();
  }, []);

  return (
    <div>
      <Header />
      <section>
        {thisBeer && (
          <>
            <img
              src={thisBeer.image_url}
              alt={thisBeer.name}
              className="beerImage"
            />
            <h2>{thisBeer.name}</h2>
            <p>{thisBeer.tagline}</p>
            <p>{thisBeer.first_brewed}</p>
            <p>{thisBeer.attenuation_level}</p>
            <p>{thisBeer.description}</p>
            <p>{thisBeer.contributed_by}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default BeerId;