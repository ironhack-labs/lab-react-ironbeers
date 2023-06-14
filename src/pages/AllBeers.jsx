import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/headerImg.png";
import { useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  console.log(beers);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      setBeers(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/">
        <img src={headerImg} alt="headerImg" />
      </Link>

      {beers.map((beer) => (
        <div key={beer.id}>
          <h2> Created by: {beer.name}</h2>
          <img src={beer.image_url} alt={beer.name} />
          <h2> {beer.tagline}</h2>
          <Link to={`/beers/${beer.id}`}>
            <button> Details </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
