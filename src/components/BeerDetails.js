import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { API_URL } from "../constants";
import "./BeerDetails.css";

const useBeer = () => {
  const [beer, setBeer] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { beerId } = useParams();
  const beerUrl = `${API_URL}/${beerId ? beerId : "random"}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(beerUrl)
      .then((result) => {
        setLoading(false);
        setBeer(result.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [beerUrl]);

  return { beer, error, loading };
};

export default function BeerDetails() {
  const { beer, error, loading } = useBeer();

  return (
    <div>
      <Header />
      {error ? (
        <span>Error</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : beer ? (
        <div className="BeerDetails">
          <img src={beer.image_url} alt="beerImage" />
          <div className="BeerSpec">
            <h2>{beer.name}</h2>
            <h2 className="details">{beer.attenuation_level}</h2>
          </div>
          <div className="BeerSpec">
            <h3 id="spec">{beer.tagline}</h3>
            <h3>{beer.first_brewed}</h3>
          </div>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ) : null}
    </div>
  );
}
