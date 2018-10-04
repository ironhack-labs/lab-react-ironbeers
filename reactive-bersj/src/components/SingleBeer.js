import React from "react";

export const SingleBeer =({image_url, name, tagline, contributed_by, first_brewed, attenuation_level, description, })=> {
  
    return (
      <div>
        <img src={image_url} alt="" width={100} height={100}></img>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>{description}</p>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{contributed_by}</p>
      </div>
    );
}