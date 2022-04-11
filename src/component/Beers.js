import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(data);
    };
    getBeers();
  }, [beers]);

  const allBeers = beers.map((beer) => {
    return (
      <div className="beers-display">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <p> {beer.name} </p>
          <p> {beer.tagline} </p>
          <p> {beer.contributed_by} </p>
          <Link to={`beers/${beer._id}`}> See More </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="content">
      <Link className={`App-link`} to="/">
        {allBeers}
      </Link>
    </div>
  );
}

export default Beers;
