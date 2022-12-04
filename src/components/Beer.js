import React from "react";

function Beer({beers}) {
    console.log(beers)
    return (
        <ul>
      {beers.map(item => (
        <li key={item._id}>
          <h2>{item.name}</h2>
          <img className="beer-img"src={item.image_url} alt={item.name} />
          <p>{item.tagline}</p>
          <p>Contributed by {item.contributed_by}</p>
        </li>
      ))}
    </ul>
    );
}

export default Beer;