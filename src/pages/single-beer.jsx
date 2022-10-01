import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetails from "../components/beer-details";

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        setBeer(result.data);
        console.log(result.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return <BeerDetails {...beer} />;
}

export default SingleBeer;
