import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    const { data } = await axios("https://ih-beers-api2.herokuapp.com/beers");
    setBeers(data);
  };

  return (
    <div>
      <Navbar />
      <h3>All Beers</h3>

      {!beers && <p>Loading...</p>}
      {beers.map((beer) => {
        return (
          <div className="beer-container" key={beer._id}>
            <h3>Name: {beer.name}</h3>
            <p>Tagline: {beer.tagline}</p>
            <img
              style={{ width: "150px" }}
              src={beer.image_url}
              alt={beer.name}
            />
            <p>Contributed By: {beer.contributed_by}</p>
            <Link className="link" to={`/beers/${beer._id}`}>
              See details
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
