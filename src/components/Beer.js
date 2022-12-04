import React from "react";
import { Link, NavLink } from "react-router-dom";

function Beer({ beers }) {
 //console.log(beers)
  return (
    <ul>
      {beers.map(item => (
        <li key={item._id} className="card">
          <img className="beers-img" src={item.image_url} alt={item.name} />
          <div className="beers-text">
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <p>Contributed by {item.contributed_by}</p>
            <Link className="small-link" to={`/beer/${item._id}`}>For more informetion click here</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Beer;