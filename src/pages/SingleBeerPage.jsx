import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBeerPage() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <section className="single-beer-section">
      {beer && (
        <>
          <img src={beer.image_url} alt="beer-img" />
          <div className="single-beer-info">
            <div className="single-beer-name-and-tagline">
              <h4>{beer.name}</h4>
              <h5>{beer.tagline}</h5>
            </div>
            <div className="single-beer-attenuation-and-firstbrewed">
              <h6>{beer.attenuation_level}</h6>
              <h6>{beer.first_brewed}</h6>
            </div>
            <p>{beer.description}</p>
            <h6>{beer.contributed_by}</h6>
          </div>
        </>
      )}
    </section>
  );
}

export default SingleBeerPage;
