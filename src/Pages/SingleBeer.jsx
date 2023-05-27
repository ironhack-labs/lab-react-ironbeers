import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const {id} = useParams();
  const [beer, setBeer] = useState("");

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) => {
      setBeer(response.data);
    });
  });
  return (
    <div>
      <Navbar />
      {beer && (
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <h4>{beer.contributed_by}</h4>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;
