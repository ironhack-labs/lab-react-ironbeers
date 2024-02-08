import { useState, useEffect } from "react";
import "./pages.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  function handleSearch(e) {
    const query = e.target.value;
    console.log("handleSearch", query);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((responseSearch) => {
        setBeers(responseSearch.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beersList) => {
        setBeers(beersList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-all-beer">
      <label className="container-search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleSearch}
          className="search-input"
        ></input>
      </label>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link
              to={`/beers/${beer._id}`}
              className="container-all-beer-details"
            >
              <img
                src={beer.image_url}
                alt={beer.name}
                className="img-all-beer"
              />
              <div className="container-all-beer-text">
                <h3 className="h3-all-beer-h3">{beer.name}</h3>
                <p className="p-all-beer-p-tagline">{beer.tagline}</p>
                <p className="p-all-beer-p-created">
                  Created by:{" "}
                  <span className="contributed_by">{beer.contributed_by}</span>
                </p>
              </div>
            </Link>
            <hr className="solid"></hr>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
