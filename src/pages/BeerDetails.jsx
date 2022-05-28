import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
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
    <div>
      <Header />
      {beer && (
        <div className="detailsBox">
          <img src={beer.image_url} alt="beersImg" />
          <div className="detailsContainer">
            <div className="detailsHeader">
              <div>
                <h2>{beer.name}</h2>
                <h4>
                  <span>{beer.tagline}</span>
                </h4>
              </div>
              <div>
                <p>
                  <span>{beer.attenuation_level}</span>
                </p>
                <p>
                  <b>{beer.first_brewed}</b>
                </p>
              </div>
            </div>

            <p>{beer.description}</p>
            <p>
              <span>{beer.contributed_by}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerDetails;
