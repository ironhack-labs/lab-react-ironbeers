import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./SingleBeerPage.css";

const SingleBeerPage = () => {
  const [beer, setBeer] = useState({});

  const params = useParams();

  console.log("params.id", params.id);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        console.log("singlebeer", response.data);
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="single-beer">
      <div className="sinlge-beer-picture">
        <picture>
          <img src={beer.image_url} alt="beerimage" />
        </picture>
      </div>
      <div className="single-beer-info">
        <div className="name-and-attenuation">
          <p className="single-beer-name">{beer.name}</p>
          <p className="single-beer-attenuation">{beer.attenuation_level}</p>
        </div>
        <div className="tag-and-brewed">
          <p className="single-beer-tag">{beer.tagline}</p>
          <p className="single-beer-brewed">{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <p className="single-beer-contributed">{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default SingleBeerPage;
