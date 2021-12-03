import React from "react";
import Header from "./../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const APIURL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const [selectedBeer, setSeletecedBeer] = useState([]);

  const { beerId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL + beerId);
        const foundBeerData = response.data;

        setSeletecedBeer(foundBeerData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="beer-div">
        <img src={selectedBeer.image_url} alt="beer" />
        <h3>{selectedBeer.name}</h3>
        <p>{selectedBeer.tagline}</p>
        <p>{selectedBeer.first_brewed}</p>
        <p>Attenuation level {selectedBeer.attenuation_level}</p>
        <p>{selectedBeer.description}</p>
        <p> Created by: {selectedBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
