import React from "react";
import { Link } from "react-router-dom";


export const CardBeer =({image_url, name, tagline, contributed_by, _id})=> {
  
    return (
      <div className="container is-fluid">
        <img src={image_url} alt="" width={100} height={100}></img>
        <Link to={`/beers/${_id}`}><p>{name}</p></Link>
        <p>{tagline}</p>
        <p>Created by: {contributed_by}</p>
      </div>
    );
  
}
