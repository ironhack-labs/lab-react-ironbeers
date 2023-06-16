import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css"; // Import the CSS file

function BeerDetail() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      setBeer(response.data);
    };
    fetchData();
  }, [beerId]);

  return (
    <div className="beer-detail">
      <h1>Beer Detail</h1>
      <h2>Beer ID: {beerId}</h2>
      <div className="beer-detail-info">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>
            <strong>First Brewed:</strong> {beer.first_brewed}
          </p>
          <p> {beer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetail;
