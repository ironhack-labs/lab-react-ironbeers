import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const beersUrl = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState("");
  const [search, setSearch] = useState("");

  const getAllBeers = async () => {
    try {
      const response = await axios.get(beersUrl);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search.length === 0) {
      getAllBeers();
    } else {
      handleSearch();
    }
  }, [search]);

  const handleSearch = async () => {
    // setSearch(event.target.value);
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(search);

  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        name="search"
        id="search"
      />
      {beers ? (
        beers.map((beer) => (
          <div
            key={beer._id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40vw",
              textAlign: "center",
              margin: "auto",
              marginBottom: "20px",
              border: "solid, 1px, black",
              padding: "30px",
            }}
          >
            <img
              style={{
                height: "20vh",
                width: "20vh",
                marginTop: "2vh",
              }}
              src="https://www.melandrose.com/prodimages/11161-DEFAULT-l.jpg"
              alt="No Image"
            ></img>
            <Link to={`/beers/${beer._id}`}>
              <h1>Name: {beer.name}</h1>
            </Link>
            <h3>{beer.tagline}</h3>
            <p>Description: {beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default AllBeersPage;
