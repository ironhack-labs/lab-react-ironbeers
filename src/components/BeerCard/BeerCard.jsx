import React from 'react';
import { Link } from "react-router-dom";

const BeerCard = ({_id, image_url, name, tagLine, contributed_by}) => {
  return (
    <div className="flex-row">
      <figure className="flex-column" style={{width: "70px", height: "150px"}}>
        <img src={image_url} alt={name} style={{ width: '50%', height: "70%" }}/>
      </figure>
      <div className="flex-double-column flex-center">
        <Link to={`/beers/${_id}`}>Name: {name}</Link>
        <p>{tagLine}</p>
        <p>Contributed by: {contributed_by}</p>
      </div>
    </div>
  )
}

export default BeerCard;
