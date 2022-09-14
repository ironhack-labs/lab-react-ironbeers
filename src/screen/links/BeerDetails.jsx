import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetails() {
  const { beerId } = useParams();
  const [beer, setBeers] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      const oneBeer = response.data.find((beer) => beer._id === beerId);
      if (oneBeer) {
        setBeers(oneBeer);
      } else {
        console.log("Error");
      }
    });
  }, [beerId]);

  return (
    <>
      <Header />
      <div>
        {beer && (
          <div style={{ width: "500px" }}>
            <div className="d-flex justify-content-center mb-3">
              <img
                className="mt-3"
                src={beer.image_url}
                alt=""
                style={{ height: "250px" }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <h2>{beer.name}</h2>

              <h2 style={{ color: "grey" }}>{beer.attenuation_level}</h2>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <h5 style={{ color: "grey" }}>{beer.tagline}</h5>
              <h5>{beer.first_brewed}</h5>
            </div>
            <p>Description: {beer.description} </p>
            <h6>Contributed by: {beer.contributed_by}</h6>
          </div>
        )}
      </div>

      <Link to={`/beers`}>
        <h4 className="mt-5">Back to Beers</h4>
      </Link>
    </>
  );
}

export default BeerDetails;
