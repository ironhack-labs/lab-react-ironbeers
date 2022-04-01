import React from "react";
import { Link } from "react-router-dom";
import './Beer.css';
// import BeerDetail from "../BeerDetail/BeerDetail";

const Beers = ({ beers }) => {
  return (
    <>
      
        {beers.map((beer) => {
          return (
            <>
              <div key={beer._id} className="container">
                <div className="card-container">
                  <img className="beer-img" src={beer.image_url} alt={beer.name} />
                </div>

                <div className="text-card">
              <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
              </Link>
                  <h4>{beer.tagline}</h4>
                  <h6>
                    <strong>
                      Contributed by: <small>{beer.name}</small>
                    </strong>
                  </h6>
                </div>
              </div>
            </>
          );
        })}
      
    </>
  );
};

export default Beers;

