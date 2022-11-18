import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

function Beers() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="cards-section">
      <Navbar />
      {beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <div>
            <img src={beer.image_url} alt="beer" />
          </div>
          <div>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>
              <button className="button-custom">Go to Beer</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Beers;
