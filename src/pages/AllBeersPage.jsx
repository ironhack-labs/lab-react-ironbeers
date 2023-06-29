import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <SearchBar value={query} handleSearch={handleSearch} />
      {allBeers.map(function (beer) {
        return (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div key={beer._id}>
              <img src={beer.image_url} alt="" />
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <i>{beer.contributed_by}</i>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
