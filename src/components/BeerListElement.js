import React from "react";

const BeerListElement = ({ beer }) => {
  let {
    image_url,
    name,
    tagline,
    contributed_by
  } = beer;
  return (
    <article className="media">
      <figure className="media-left">
        <img src={image_url} alt="hola" style={{height: "128px"}}/>
      </figure>
      <div className="media-content">
        <div className="content">
          <h3>{name}</h3>
          <p>{tagline}</p>
          <p>{contributed_by}</p>
        </div>
      </div>
    </article>
  );
};

export default BeerListElement;