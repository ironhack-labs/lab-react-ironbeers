import React from "react";
import { useParams, Link } from "react-router-dom";
import Headers from "./Headers";



function SingleBeers(props) {

    const { _id } = useParams();

  if (props.listBeers === undefined || props.listBeers === null) {
    console.log("This is it:" + props.listBeers);
    return <p>looking for a single Beer... moment, I will be right there.</p>;
  } else {

    const filteredBeers = props.listBeers.filter((beer) => {
        console.log(props.listBeers)
        console.log(beer._id.includes(_id))
      return beer._id.includes(_id);
    });

    if (filteredBeers.length === 0) {
        return <p>Beer not found.</p>;
      }

    const beer = filteredBeers[0];

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

export default SingleBeers;
