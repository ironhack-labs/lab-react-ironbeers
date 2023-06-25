import React from "react";
import { Link } from "react-router-dom";
import Headers from "./Headers";

function RandomBeer(props) {
  if (props.randomBeer === undefined || props.randomBeer === null) {
    console.log("This is it:" + props.randomBeer);
    return <p>looking for a single Beer... moment, I will be right there.</p>;
  } else {
    const beer = props.randomBeer[0];
    console.log("This is Array:" + props.randomBeer[0])
    return (
      <div>
        <div className="homebox">
          <Headers />
        </div>
        <div className="beerbox">
          <div>
            <Link to={`/beers/${beer._id}`}>
              <div className="beerbox-2">
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  width="200px"
                  height="500px"
                />
              </div>
              <div className="beerbox-2">
                <h2>{beer.name}</h2> <br />
                <p>{beer.tagline}</p> <br />
                {beer.first_brewed} <br />
                {beer.attenuation_level} <br />
                {beer.description} <br />
                {beer.contributed_by} <br />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
