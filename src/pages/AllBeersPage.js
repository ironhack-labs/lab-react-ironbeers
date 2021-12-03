import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const APIURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL);
        const beersData = response.data;

        setBeers(beersData);
        setAllBeers(beersData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const searchFilter = (chars) => {
    const filteredBeers = allBeers.filter((beer) => {
      return beer.name.toLowerCase().includes(chars.toLowerCase());
    });

    console.log(filteredBeers);
    setBeers(filteredBeers);
  };

  return (
    <div>
      <Header />
      <SearchBar searchFilter={searchFilter} />
      <h1>List of all beers</h1>
      {beers &&
        beers.map((oneBeer) => {
          return (
            <Link
              key={oneBeer._id}
              to={"/beers/" + oneBeer._id}
              className="beer-link"
            >
              <div className="beer-div">
                <img src={oneBeer.image_url} alt="beer" />
                <h3>{oneBeer.name}</h3>
                <p>{oneBeer.tagline}</p>
                <p> Created by: {oneBeer.contributed_by}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
