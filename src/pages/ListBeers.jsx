import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [searchBeers, setSearchBeers] = useState("");
  const handleSearch = (e) => setSearchBeers(e.target.value);
  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const queryBeers = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeers}`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);
  useEffect(() => {
    queryBeers();
  }, [searchBeers]);

  return (
    <div>
      <Header />
      <input
        type="text"
        name="searchBeers"
        onChange={handleSearch}
        value={searchBeers}
        placeholder="Search your favorite beer!"
      />
      <h2>List of Beers</h2>
      {beers.map((el) => {
        return (
          <div>
            <img src={el.image_url} alt="beer" />
            <h6>
              <Link to={`/beer/${el._id}`}>Name:{el.name}</Link>
            </h6>

            <h6>Tagline:{el.tagline}</h6>
            <h6>Contributed by:{el.contributed_by}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
