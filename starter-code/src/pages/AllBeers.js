import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/UI/CardBeer.js";
import "bootstrap/dist/css/bootstrap.min.css";

const AllBeer = () => {
  const [beer, setBeer] = useState([]);
  const [search, setSearch] = useState("");
  const beers = async () => {
    const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`);
    return res.data;
  };
  useEffect(() => {
    beers().then(beer => setBeer(beer));
  }, []);

  const searchBeers = async query => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
    );
    return response.data;
  };

  const handleSearch = e => {
    const query = e.target.value;
    searchBeers(query).then(beer => setBeer(beer));
    setSearch(query);
  };

  if (!beer[0] && !search) return <p>Cargando cervezas...</p>;

  return (
    <div style={{ width: "24rem", border: "2px solid lightgrey" }}>
      <form onSubmit={e => e.preventDefault()}>
        <input
          style={{ width: "22rem" }}
          className="rounded-pill mt-2 mb-3"
          name="search"
          placeholder="Search your beer"
          value={search}
          onChange={handleSearch}
        />
      </form>
      {beer.map(beer => (
        <Card key={beer._id}>
          <Link to={`/beer-detail/${beer._id}`} key={beer.i}>
            <img
              className="mt-3 mb-2"
              style={{ width: "60px", height: "160px" }}
              src={beer.image_url}
              alt={beer.name}
            ></img>
          </Link>
          <h3>{`Name: ${beer.name}`}</h3>
          <p>{`Tagline: ${beer.tagline}`}</p>
          <p>{`Contributed By: ${beer.contributed_by}`}</p>
        </Card>
      ))}
    </div>
  );
};

export default AllBeer;
