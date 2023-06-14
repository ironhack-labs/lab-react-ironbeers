import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SiHomebrew } from "react-icons/si";

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers "
      );
      setAllBeers(data);
      console.log("data", data);
    };
    getBeers();
    console.log("beers", allBeers);
  }, []);

  if (!allBeers) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header className="header">
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>{" "}
      </header>
      <h1>Beers</h1>
      {allBeers.map((beer) => {
        return (
          <div key={beer._id} className="beers-container">
            <img src={beer.image_url} alt="beer" className="all-beer-img" />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <h4>{beer.contributed_by}</h4>
            <Link to={"/beers/:beerId"}>Check Beer Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
