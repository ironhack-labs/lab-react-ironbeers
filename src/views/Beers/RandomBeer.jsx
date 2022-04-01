import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const RandomBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeers = async () => {
      const beersFromApi = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(beersFromApi.data);
    };
    getBeers();
  }, [id]);

  return (
    <div>
      <div className="detail">
        <img src={beer.image_url} alt="single beer" />
        <div className="detail-content">
          <h1>{beer.name}</h1>
          <h4>{beer.tagline}</h4>
          <div className="line-content">
            <p className="card-content">
              <small>Attenuation level: {beer.attenuation_level}</small>
            </p>
            <p className="card-content">
              <small>First brewed: {beer.first_brewed}</small>
            </p>
          </div>
          <p className="card-content">{beer.description}</p>
          <p className="card-content">
            <small>
              Created by:
              <i> {beer.contributed_by}</i>
            </small>
          </p>
          <Link to="/beers" className="link" style={{ textDecoration: "none" }}>
            <p>Go back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
