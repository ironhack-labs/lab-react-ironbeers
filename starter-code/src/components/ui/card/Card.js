import React from "react";
import "./Card.css"
import {Link} from "react-router-dom"

const Card = (props) => {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.image_url} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.tagline}</p>
          <small>
            <strong>Created by:</strong>
            {props.contributed_by}
          </small>
          <Link className="btn btn-primary" to={`/details/${props._id}`}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
