import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Beers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <h3>All Beers</h3>
      {beers.map((beer) => (
        <Link to={`/beers/${beer._id}`}>
          <img src={beer.image_url} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </Link>
      ))}
    </div>
  );
}

export default Beers;
