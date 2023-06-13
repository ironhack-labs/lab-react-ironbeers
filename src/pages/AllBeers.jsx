import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [allBeers, setAllBeers] = useState();

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers "
      );
      setAllBeers(data);
      console.log("data", data);
    };
    getBeers();
    console.log("beers", allBeers);
  }, []);

  return (
    <div>
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>{" "}
    </div>
  );
}

export default AllBeers;
