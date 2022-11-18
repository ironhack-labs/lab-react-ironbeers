import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

function Beer() {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className="cards-section">
      <Navbar />
      <div key={id} className="single-beer-card">
        <div>
          <img src={beer.image_url} alt="beer" />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/`}>
            <button className="button-custom">Go Back to Beer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Beer;
