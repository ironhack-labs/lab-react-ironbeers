import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Searchbeer from "./Searchbeer";

function ListBeersPage() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  const searchBeers = async (query) => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="list-of-beers-section">
      <Searchbeer searchBeers={searchBeers} />
      {beers.map((beer) => {
        return (
          <>
            <div key={beer._id} className="each-beer-from-list">
              <div className="each-beer-from-list-img">
                <img src={beer.image_url} alt="beer-img" />
              </div>
              <div className="each-beer-from-list-info">
                <Link className="a-link" to={`/beers/${beer._id}`}>
                  <h4>{beer.name}</h4>
                </Link>
                <h5>{beer.tagline}</h5>
                <h6>
                  <b>Created by:</b> {beer.contributed_by}
                </h6>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </section>
  );
}

export default ListBeersPage;
