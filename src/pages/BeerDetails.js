import Navbar from "../components/Navbar";
import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios"; // <== IMPORT axios

function BeerDetails(props) {
  const [beers, setBeers] = useState([]);

  // get the beerId from the useParams()

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <Navbar />

      <h3>List of Beers</h3>

      {beers.map((beer) => (
        <div>
          <img src={beer.image_url} alt="" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}

export default BeerDetails;
