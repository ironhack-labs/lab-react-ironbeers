import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';

function SingleBeer(props) {
  const { id } = useParams();

  const [foundBeer, setFoundBeer] = useState(null);

  useEffect(() => {
    const oneBeer = props.beers.find((beer) => {
      return beer._id === id;
    });
    if (oneBeer) {
      setFoundBeer(oneBeer);
    }
  }, [id]);

  return (
    <div>
      {!foundBeer && <p>Beer not found</p>}

      {foundBeer && (
        <>
          <img src={foundBeer.image_url} alt="" />
          <h3>{foundBeer.name}</h3>
          <p>{foundBeer.tagline}</p>
          <p>{foundBeer.first_brewed}</p>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
          <p>{foundBeer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default SingleBeer;
