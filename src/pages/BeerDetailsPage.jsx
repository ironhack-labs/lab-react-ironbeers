import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "../services/Beers";
import { ScaleLoader } from "react-spinners"


function BeerDetailsPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeer(id)
      .then((beer) => setBeer(beer))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>Beer Details Page</h2>

      {loading ? <div><ScaleLoader /></div> : (
        <div>
          <img src={beer.image_url} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
          <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
          
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
