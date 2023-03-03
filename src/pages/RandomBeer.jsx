import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RandomBeer() {
  const params= useParams()
  const {idBeer}=params
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    getData()
  },[idBeer]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <img src={randomBeer.image_url} alt="beer-details" width="60px" />
      <h3>{randomBeer.name}</h3>
      <h5>{randomBeer.tagline}</h5>
      <h6>{randomBeer.first_brewed}</h6>
      <h6>{randomBeer.attenuation_level}</h6>
      <p>{randomBeer.description}</p>
      <h6>{randomBeer.contributed_by}</h6>
    </div>
  );
}

export default RandomBeer;
