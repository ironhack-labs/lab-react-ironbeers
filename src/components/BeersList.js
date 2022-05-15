import React from "react";
import { Link } from "react-router-dom";

function BeersList(props) {
  return (
    <div>
      {props.beers.map((x) => {
        return (
          <div key={x._id}>
            <img src={x.image_url} alt={x.name} />
            <h3>{x.name}</h3>
            <p>{x.tagline}</p>
            <footer>
              <b>Created by:</b>
              {x.name}
            </footer>
            <Link to={`/beer/${x._id}`}>More Details!</Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
