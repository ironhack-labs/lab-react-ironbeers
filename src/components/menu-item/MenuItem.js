import React from "react";
import { Link } from "react-router-dom"
import { LoremIpsum} from "react-lorem-ipsum"


function MenuItem({ image, name, to}) {

  const lorem = LoremIpsum()
  return (
    <Link to={to} className="text-decoration-none">
    <div className="card" >
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h4 className="card-title text-dark ">{name}</h4>
        <p className="card-text text-dark">
         {lorem}
        </p>
      </div>
    </div>
    </Link>
  );
}

export default MenuItem;
