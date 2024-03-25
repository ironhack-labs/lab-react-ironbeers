import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);

  const { beerId } = useParams();

  useEffect(() => {
    axios.get(`${beersAPI}/${beerId}`).then((res) => {
      setBeer(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(beer);

  return (
    <div className="beer-detailspage">
      {beer && (
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <h4>{beer.name}</h4>
          <span>{beer.attenuation_level}</span>
          <p>{beer.tagline}</p>
          <span>{beer.first_brewed}</span>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
