import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function SingleBeer() {
  const [singleBeer, setSingleBeer] = useState(null);
  const { id } = useParams();

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      console.log(response.data);
      setSingleBeer(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      {singleBeer && (
        <>
          <img src={singleBeer.image_url} alt="Beer" height="300" />
          <h1>{singleBeer.name}</h1>
          <span>{singleBeer.attenuation_level}</span>
          <h2>{singleBeer.tagline}</h2>
          <span>{singleBeer.first_brewed}</span>
          <p>{singleBeer.description}</p>
          <h6>{singleBeer.contributed_by}</h6>
        </>
      )}
    </div>
  );
}

export default SingleBeer;
