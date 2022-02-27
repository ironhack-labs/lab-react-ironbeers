import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import Beers from "./pages/Beers";

function BeerDetails(props) {
  //console.log(props)
  const [beers, setBeers] = useState([]);

  // get the beerId from the useParams()
  const { beerId } = useParams();
  //console.log('beerId -->', beerId);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
      .then((response) => {
        //console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, [beerId]);

  return (
    <div>
      <Navbar />

      <h3>Details of the Beer</h3>
      <div>
        <img src={beers.image_url} alt="" />
        <h3>{beers.name}</h3>
        <p>{beers.tagline}</p>
        <p>{beers.first_brewed}</p>
        <p>{beers.attenuation_level}</p>
        <p>{beers.description}</p>
        <p>{beers.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
