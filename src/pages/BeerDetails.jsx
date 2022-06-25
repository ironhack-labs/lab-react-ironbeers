import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import './BeerDetails.css'

const BeerDetails = () => {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  if (!id) {
    id = `random`;
  }

  useEffect(() => {

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(({ data }) => {
        setBeer(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });

  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!beer.name) {
    return <p>Beer not found!</p>;
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} />

      <div className="head">
        <div className="h-t">
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
        </div>
        
        <div className="prod">
          <p>{beer.attenuation_level}</p>
          <p>{beer.first_brewed}</p>
        </div>
      </div>

      <p className="description">{beer.description}</p>
      <p className="creator">{beer.contributed_by}</p>
    </div>
  )
}

export default BeerDetails;