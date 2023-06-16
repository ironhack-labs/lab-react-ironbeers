import React, { useEffect, useState } from "react";
import headerImg from "../assets/headerImg.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function RandomBeer() {
  const { beerId } = useParams();
  const [randomBeer, SetRandomBeer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
      SetRandomBeer(response.data);
    };
    fetchData();
  }, [beerId]);

  return (
    <div>
      <Link to="/">
        <img src={headerImg} alt="headerImg" />
      </Link>
      <div className="beer-detail">
        <h1>Beer Detail</h1>
        <h2>Beer ID: {beerId}</h2>
        <div className="beer-detail-info">
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <div>
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
            <p>
              <strong>First Brewed:</strong> {randomBeer.first_brewed}
            </p>
            <p> {randomBeer.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
