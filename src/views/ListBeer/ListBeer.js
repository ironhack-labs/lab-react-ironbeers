import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom"
import './ListBeer.scss'

const ListBeers = ({beers})  => {
  return (
    <div>
      <Header />
      <div className="container">
        {beers.map((beer) => {
          return (
            <div className="beer" key={beer._id}>
              <div className="beer__capture">
              <Link to={`/beers/${beer._id}`}>
                <img className="beer__image" src={beer.image_url} alt={beer.name} />
              </Link>
              </div>

              <div className="beer__info">
                <h1 className="beer__name">{beer.name}</h1>
                <p className="beer__tagline">{beer.tagline}</p>
                <p className="beer__contributed">
                  <strong>Contributed by:</strong> {beer.name}
                </p>
                <Link className="beer__cta" to={`/beers/${beer._id}`}>View details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListBeers