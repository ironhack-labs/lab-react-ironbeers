import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { API_URL } from "../constants";
import "./BeerList.css";

const useBeers = () => {
  const [beers, setBeers] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((result) => {
        setLoading(false);
        setBeers(result.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { beers, error, loading };
};

export default function BeersList() {
  const { beers, error, loading } = useBeers();
  return (
    <div>
      <Header />
      {error ? (
        <span>Error</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : beers ? (
        beers.map((beer, index) => <BeerItem {...beer} key={index} />)
      ) : null}
    </div>
  );
}

function BeerItem({ image_url: img, name, tagline, contributed_by, _id }) {
  return (
    <NavLink to={`/beers/${_id}`}>
      <div className="BeerItem">
        <img src={img} alt="img" />
        <div className="BeerSpecs">
          <h3>{name}</h3>
          <h4>{tagline}</h4>
          <p>Created by:{contributed_by}</p>
        </div>
      </div>
    </NavLink>
  );
}
