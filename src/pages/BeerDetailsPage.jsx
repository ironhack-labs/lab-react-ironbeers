import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "../services/BeersServices";
import Spinner from "../components/Spinner/Spinner";
import CardDetails from "../components/CardDetails/CardDetails";

function BeerDetailsPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeer(id)
      .then((beer) => setBeer(beer))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);
  
  return (
    <div className="container">
      <h1>Beers Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <CardDetails
          image_url={beer.image_url}
          name={beer.name}
          description={beer.description}
          route="/beers"
        />
      )}
    </div>
  );
}

export default BeerDetailsPage;
