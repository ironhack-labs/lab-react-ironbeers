import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import axios from "axios";
import SearchBar from "../components/Searchbar";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      if (query !== "") {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
          .then(function (response) {
            console.log("response.data", response.data);
            setAllBeers(response.data);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then(function (response) {
            setAllBeers(response.data);
            console.log(response.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [query]
  );

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="allBeersPage">
      <SearchBar value={query} handleSearch={handleSearch} />
      <div>
        <Grid container spacing={2}>
          {allBeers.map(function (beer) {
            return (
              <Grid item xs={12} sm={6} md={4} key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <div key={beer._id} className="beerCard">
                    <img src={beer.image_url} alt="" />
                    <div className="beerCardContent">
                      <h3>{beer.name}</h3>
                      <h5>{beer.tagline}</h5>
                      <i>{beer.contributed_by}</i>
                    </div>
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default AllBeersPage;
