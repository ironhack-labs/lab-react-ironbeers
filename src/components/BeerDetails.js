import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetails({ beers }) {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined && beers !== null) {
      setBeer(beers.find((beer) => beer._id === id));
    } else {
      axios
        .get(`${process.env.REACT_APP_BEERS_API}/beers/random`)
        .then((response) => setBeer(response.data))
        .catch((error) => console.log("Error fetching data:", error));
    }
  }, []);

  return (
    <div className="container">
      {beer !== null ? (
        <>
          <div className="row">
            <div className="col col-12 text-center">
              <img src={beer.image_url} alt={beer.name} />
            </div>
          </div>
          <div className="row">
            <div className="col col-6">
              <h1>{beer.name}</h1>
            </div>
            <div className="col col-6 text-right text-black-50">
              <h1>{beer.attenuation_level}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-9 text-black-50">
              <h3>{beer.tagline}</h3>
            </div>
            <div className="col col-3 text-right font-weight-bold">
              {beer.first_brewed}
            </div>
          </div>
          <div className="row">
            <div className="col font-weight-bold">
              <p>{beer.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-black-50">
              <h6>{beer.contributed_by}</h6>
            </div>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default BeerDetails;
