import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import beerService from "../../services/beers.service";

const SingleBeer = () => {
  const { id } = useParams()

  const [beer, setBeer] = useState()

   useEffect(() => {
     loadBeer();
   });
  //  }, []); si le pongo el array vacio vsc se queja. porque?

   const loadBeer = () => {
     beerService
       .getOneBeers(id)
       .then(({ data }) => setBeer(data))
       .catch((err) => console.log(err));
   };

  return (
    <Container className="mt-5">
      <div style={{ width: "300px" }}>
        <img src={beer?.image_url} alt="Beer" height="350px" />
        <div className="d-flex justify-content-between mt-3">
          <h2>{beer?.name}</h2>
          <p className="text-muted fs-4">{beer?.attenuation_level}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted">{beer?.tagline}</p>
          <p>{beer?.first_brewed}</p>
        </div>
        <p>{beer?.description}</p>
        <p className="text-muted">{beer?.contributed_by}</p>
      </div>
    </Container>
  );
}

export default SingleBeer