import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AllBeersPage.css"

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beers data:", error);
      });
  }, []);

  return (
    <div className="AllPage">
      <div className="AllBeersPage">
        <h1>All Beers</h1>
        <ul>
          {beers.map((beer) => (
            <li key={beer.id}>
              <NavLink to={`/beers/${beer.id}`}>
                <img src={beer.image_url} />
                <div>
                  <h2>{beer.name}</h2>
                  <p>{beer.tagline}</p>
                  <p>Contributed by: {beer.contributed_by}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllBeersPage;
