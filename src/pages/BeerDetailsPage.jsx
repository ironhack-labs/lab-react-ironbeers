import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [selectedBeer, setSelectedBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then((response) => {
        setSelectedBeer(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {selectedBeer.map((selectedBeer) => (
          <li key={selectedBeer.name}>{selectedBeer.title}</li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default BeerDetailsPage;
