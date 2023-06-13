import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function getBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }
    getBeers();
  }, []);

  return (
    <div>
      <Navbar />
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <Link to={`/beers/${beer._id}`}>
                <h2>{beer.name}</h2>
            </Link>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
