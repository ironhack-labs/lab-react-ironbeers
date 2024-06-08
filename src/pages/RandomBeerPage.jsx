import { useEffect } from "react";
import { useState } from "react";
import { getRandomBeer } from "../services/BeersServices";
import Spinner from "../components/Spinner/Spinner";
import CardDetails from "../components/CardDetails/CardDetails";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomBeer()
      .then((random) => setRandomBeer(random))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <CardDetails
          image_url={randomBeer.image_url}
          name={randomBeer.name}
          description={randomBeer.description}
          route="/"
        />
      )}
    </div>
  );
}

export default RandomBeersPage;
