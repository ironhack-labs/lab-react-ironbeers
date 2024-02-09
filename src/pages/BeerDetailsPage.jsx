import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [oneBeer, setOneBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((result) => {
        setOneBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerId]);

  return (
    <div className="beerDetailsContainer">
      <img src={oneBeer.image_url} style={{width:'300px'}} />
      <h1  className="oneBeerDetail" style={{marginTop: `20px`}}>{oneBeer.name}</h1>
      <h2 className="oneBeerDetail" >{oneBeer.attenuation_level}</h2>
      <h2 className="oneBeerDetail">{oneBeer.tagline}</h2>
      <h3 className="oneBeerDetail">{oneBeer.first_brewed}</h3>
      <p className="oneBeerDetail" >{oneBeer.description}</p>
      <p className="oneBeerDetail" style={{paddingBottom: `20px`}}>{oneBeer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
