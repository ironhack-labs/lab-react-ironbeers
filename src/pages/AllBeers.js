import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />

      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
