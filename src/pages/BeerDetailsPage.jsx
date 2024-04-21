import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState();
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setBeer(res.data);
      });
  }, []);

  if (!beer) return <p>Loading...</p>;
  return (
    <div className="card" style={{ width: 400 }}>
      <img src={beer.image_url} className="card-img-top" alt={beer.name} />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.attenuation_level}</p>
        <p className="card-text">{beer.tagline}</p>
        <p className="card-text">
          <small className="text-body-secondary">{beer.first_brewed}</small>
        </p>
        <p className="card-text">{beer.description}</p>
        <p className="card-text">
          <small className="text-body-secondary">{beer.contributed_by}</small>
        </p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
