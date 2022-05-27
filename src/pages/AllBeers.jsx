import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
  const [beersList, setBeersList] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeersList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <Header />
      <h1>All beers</h1>
      {beersList.map((beer) => {
        return (
          <div key={beer._id} className="ProjectCard card">
            <Link to={`/beersList/${beer._id}`}>
              <img src={beer.image_url} alt="beersImg" />
            </Link>
            <div>
              <h2>{beer.name}</h2>
              <h4>{beer.tagline}</h4>
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}



export default AllBeers;
