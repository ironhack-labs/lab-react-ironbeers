import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/headerImg.png";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";

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
    <div className="container">
      <Link to="/">
        <img src={headerImg} alt="headerImg" style={{ width: "100%" }} />
      </Link>

      {beers.map((beer) => (
        <div key={beer.id} className="beer-card">
          <img src={beer.image_url} alt={beer.name} />
          <div className="text-container">
            <h2> Created by: {beer.name}</h2>
            <p> {beer.tagline}</p>
            <Link to={`/beers/${beer._id}`}>
              <button> Details </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
