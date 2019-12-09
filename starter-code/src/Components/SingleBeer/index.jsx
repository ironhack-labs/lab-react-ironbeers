import React from "react";
import { Link } from "react-router-dom";

export default function index(props) {
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px", maxHeight: "200px" }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            style={{ maxHeight: "200px", width: "auto", padding: "2em" }}
            src={props.image_url}
            className="card-img"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.tagline}</p>
            <p className="card-text">
              <small className="text-muted">
                Created By: {props.contributed_by}
              </small>
            </p>
            <Link to={`/beers/${props._id}`}>
              <button className="btn btn-outline-info btn-sm">
                More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
