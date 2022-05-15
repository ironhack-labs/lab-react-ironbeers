import React from "react";
import { useParams } from "react-router-dom";

function BeerDetails(props) {
  const { id } = useParams();
  const beersArr = props.beers;

  const detailedBeer = beersArr.find((x) => {
    return x._id === id;
  });

  return (
    <>
      {detailedBeer ? (
        <div>
          <img src={detailedBeer.image_url} alt={detailedBeer.name} />
          <h3>{detailedBeer.name}</h3>
          <p>
            <b>Tagline:</b> {detailedBeer.tagline}
          </p>
          <p>
            <b>First brewed:</b> {detailedBeer.first_brewed}
          </p>
          <p>
            <b>Attenuation level:</b> {detailedBeer.attenuation_level}
          </p>
          <p>
            <b>Description:</b> {detailedBeer.description}
          </p>
          <p>
            <b>Contributed by:</b> {detailedBeer.contributed_by}
          </p>
          <p>
            <b></b>
          </p>
        </div>
      ) : (
        "....Loading!"
      )}
    </>
  );
}

export default BeerDetails;
