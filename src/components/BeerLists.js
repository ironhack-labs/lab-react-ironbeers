import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const BeerLists = () => {
  const [query, setQuery] = useState("");
  const [filteredBeerList, setFilteredBeerList] = useState([]);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        console.log("response.data:", response.data);
        setFilteredBeerList(response.data);
      });
  }, [query]);

  return (
    <>
      <Navbar/>
      <label>Search</label>
      <input type="text" onChange={handleInputChange} />

      <p className="h1">Beer Lists</p>
      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          {filteredBeerList.map((elm, i) => {
            return (
              <div key={i} className="col-6">
                <Link to={`/beers/${elm._id}`}>
                  <div className="p-3 border bg-light">
                    Name : {elm.name} <br></br> {elm.tagline}
                    <br></br>
                    {elm.contributed_by}
                  </div>

                  <img src={elm.image_url} alt="img" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BeerLists;
