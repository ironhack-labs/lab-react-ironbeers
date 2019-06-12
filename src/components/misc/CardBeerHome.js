import React from 'react';
import { Link } from 'react-router-dom'
import { loremIpsum } from "lorem-ipsum";

function CardBeerHome({urlImg, urlLink, name}) {
  return (
    <div className="card">
    <Link to={urlLink}> <img className="card-img-top" src={urlImg} alt="New Beer" /></Link>
      <div className="card-body text-left">
        <h5 class=" card-title ">{name}</h5>
        <p className="card-text"> {loremIpsum({ count: 2, units: "sentences" })}</p>
      </div>
    </div>
  );
}

export default CardBeerHome;
