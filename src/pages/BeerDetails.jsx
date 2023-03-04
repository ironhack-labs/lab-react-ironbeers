import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function BeerDetails() {
  const params = useParams();
  //   console.log(params)
  const [beerDetails, setBeerDetails] = useState([]);
  const { idBeer } = params;

  useEffect(() => {
    getData();
  }, [idBeer]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${idBeer}`
      );
      console.log(response.data);
      setBeerDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <img src={beerDetails.image_url} alt="beer-details" width="60px" />
      <h3>{beerDetails.name}</h3>
      <h5>{beerDetails.tagline}</h5>
      <h6>{beerDetails.first_brewed}</h6>
      <h6>{beerDetails.attenuation_level}</h6>
      <p>{beerDetails.description}</p>
      <h6>{beerDetails.contributed_by}</h6>
    </div>
  );
}

export default BeerDetails;
