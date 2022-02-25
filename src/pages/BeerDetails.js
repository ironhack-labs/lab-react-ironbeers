import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BeerComponent from "./../components/BeerComponent";
import axios from "axios";

function BeerDetails() {
  const [beer, setBeer] = useState({});
  let { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
  }, [beerId]);

  return <BeerComponent beer={beer} />;
}

export default BeerDetails;
