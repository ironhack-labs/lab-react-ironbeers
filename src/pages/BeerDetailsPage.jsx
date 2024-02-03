import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeersDetails } from "../services/servise";

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    getBeersDetails(beerId)
      .then((beerApi) => setBeer(beerApi))
      .catch((err) => console.log(err));
  }, [beerId]);

  if (!beer) return "Loading...";

  return (
    <div className="container mt-5">
      <div className="card" style={{ height: "500px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={beer.image_url}
              className="img-fluid"
              alt={beer.name}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{beer.name}</h2>
              <p className="card-text">{beer.tagline}</p>
              <p className="card-text">First Brewed: {beer.first_brewed}</p>
              <p className="card-text">
                Attenuation Level: {beer.attenuation_level}
              </p>
              <p className="card-text">{beer.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Contributed by: {beer.contributed_by}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetailsPage;
