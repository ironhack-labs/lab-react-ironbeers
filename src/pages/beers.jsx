import React, { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../components/beer";

function Beers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setBeers(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All de Beer</h1>
      <form action="">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search da beers"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {beers
        .filter((beer) =>
          beer.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((beer) => {
          return <Beer {...beer} key={beer._id} />;
        })}
    </div>
  );
}

export default Beers;
