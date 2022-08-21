import React from "react";

function SingleBeer(props) {
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = props;

  return (
    <div>
        <div>
        <img src={image_url} alt="" />
            <h2>{name}</h2>
            <h4>{tagline}</h4>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </div>
    </div>
  )
}

export default SingleBeer