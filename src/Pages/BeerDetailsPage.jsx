import {useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";

import BeerDetails from "../Components/BeerDetails";

function BeerDetailsPage() {
    const [beers, setBeers] = useState("");

    const {beerId} = useParams();


  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, []);

  return (
    <div>
    <Header/>
      <h3>Beer Details</h3>
      <div className="beer-details">
          <BeerDetails key={beers._id} beer={beers} />
      </div>
    </div>
  );
}

export default BeerDetailsPage;