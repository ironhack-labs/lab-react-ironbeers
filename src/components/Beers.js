import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Beers = () => {
  const [beersList, setBeersList] = useState([]);
  const [search, setSearch] = useState([]);
  console.log(beersList);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        // console.log(response.data)
        setBeersList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //////////////////////////////////////
  const handleSearch = (event) => {
    setSearch(event.target.value);

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((response) => {
        setBeersList(response.data);
      });
  };

  return (
    <div>
      <form className="d-flex fixed-top m-2 col-3 " role="search">
        <input
          className="form-control me-2"
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light text-white" type="submit">
          Search
        </button>
      </form>
      <main className="container text-center d-flex flex-column alto justify-content-center  mt-5">
        {beersList.map((beer) => {
          return (
            <div className="col-12 col-xl-10 mt-2 border-bottom" key={beer._id}>
              <div className="row my-3">
                <div className="col-4 ">
                  <Link to={`/beers/${beer._id}`}>
                    <img
                      src={`${beer.image_url}`}
                      alt={`Poster for ${beer.name}`}
                      className="col-4"
                    />
                  </Link>
                </div>
                <div className="col-8 text-start">
                  <h2>{beer.name}</h2>
                  <p className="text-black-50">{beer.tagline}</p>
                  <p className="text-black">
                    <strong className="fw-bolder">Created by: </strong>{" "}
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Beers;
