import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Beers.css";

const Beers = ({ baseUrl }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios(baseUrl);
      //   console.log(data);
      setBeers(data);
    };

    getBeers();
  }, []);

  const listBeers = beers.map((beer) => (
    <Link key={beer._id} to={`/beers/${beer._id}`}>
      <div className="beer">
        <img src={beer.image_url} alt="beer" />
        <div className="description">
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <span>Created by: {beer.contributed_by}</span>
        </div>
      </div>
    </Link>
  ));

  return <div>{listBeers}</div>;
};

export default Beers;
