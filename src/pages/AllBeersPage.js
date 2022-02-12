import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  //set a state for the objects in the API
  const [beers, setBeers] = useState([]);
  //Import API beers in order to get a second array with all the beers that remains unchanged so the search function works whenever there is no direct match
  const [searchBeers, setSearchBeers] = useState([]);

  //use effect to run the mounting and using axios to get the data
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/`);
      const beersData = response.data;

      setBeers(beersData);
      setSearchBeers(beersData);
    };

    fetchData();
  }, []);

  //Search for a specific beer out of all beers

  const filterBeerList = (char) => {
    let filteredBeer;
    if (char === "") {
      filteredBeer = searchBeers; //if empty string it shows all beers
    } else {
      filteredBeer = beers.filter((oneBeer) => {
        return oneBeer.name.toLowerCase().includes(char.toLowerCase());
      });
    }

    setBeers(filteredBeer);
  };

  return (
    <div>
      <Header />
      <Searchbar filterBeerList={filterBeerList} />

      <h2>All Beers</h2>
      {beers &&
        beers.map((oneBeer) => {
          return (
            <div className="container">
              <Link to={"/beers/details/" + oneBeer._id} key={oneBeer._id}>
                <div className="image-container">
                  <img src={oneBeer.image_url} alt="" height="200px" />
                </div>
                <div>
                  <p>{oneBeer.name}</p>
                </div>
              </Link>
              <div>
                <p>{oneBeer.tagline}</p>
                <p>{oneBeer.contributed_by}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
