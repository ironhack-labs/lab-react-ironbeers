import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const { beerId } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setOneBeer(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {!oneBeer ? (
        <p>Loading...</p>
      ) : (
        <div key={oneBeer._id}>
          <h3>Name: {oneBeer.name}</h3>
          <p>Tagline: {oneBeer.tagline}</p>
          <img src={oneBeer.image_url} alt="" />
          <p>Contributed By: {oneBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetails;
