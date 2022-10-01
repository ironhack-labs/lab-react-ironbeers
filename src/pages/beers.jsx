import React, { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../components/beer";

function Beers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((response) => {
        setBeers(response.data);
      });
  };

  return (
    <div>
      <h1>All de Beer</h1>
      <form action="">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search da beers"
          onChange={handleChange}
        />
      </form>
      {beers.map((beer) => {
        return <Beer {...beer} key={beer._id} />;
      })}
    </div>
  );
}

export default Beers;
