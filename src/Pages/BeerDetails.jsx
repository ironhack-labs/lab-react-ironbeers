import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
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
        <div className="beer-container" key={oneBeer._id}>
          <h2>Name: {oneBeer.name}</h2>
          <p>Tagline: {oneBeer.tagline}</p>
          <img src={oneBeer.image_url} alt="" />
          <h3>Contributed By: {oneBeer.contributed_by}</h3>
        </div>
      )}
    </div>
  );
}

export default BeerDetails;
