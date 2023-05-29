import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setBeers(response.data);
    });
  });
  return (
    <div>
      <Navbar />
      <h3>All Beers</h3>
      {!beers && <p>Loading...</p>}
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <h3>Name: {beer.name}</h3>
            <p>Tagline: {beer.tagline}</p>
            <img src={beer.image_url} alt="" />
            <p>Contributed By: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>See details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
