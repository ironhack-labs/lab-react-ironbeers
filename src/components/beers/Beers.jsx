import { useEffect, useState } from "react";
import { getAllBeers } from "../../services/beersAPI";
import "./beers.css";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then((beers) => setBeers(beers));
  }, []);

  return (
    <div>
      {beers.length ? (
        beers.map((beer) => (
          <Link to={`/beers/${beer._id}`} className="link" key={beer._id}>
            <div className="beertemplate-container">
              <div className="img">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="text">
                <h1>{beer.name}</h1>
                <div>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <span>Created by:</span>{" "}
                    {beer.contributed_by.split(" ").splice(0, 2).join(" ")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="beers-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beers;
