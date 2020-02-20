import React from "react";
import { Link } from "react-router-dom";

export default function SingleBeer({ data }) {
  return (
    <>
      <div className="row mb-5">
        <div className="col-3">
          <img src={data.image_url} alt="" className="beer-thumbnail" />
        </div>
        <div className="col">
          <strong>{data.name}</strong>
          <br />
          {data.tagline}
          <br />
          <em>{data.contributed_by}</em>
          <br />
          <Link to={`/beers/${data._id}`}>View Details</Link>
        </div>
      </div>
    </>
  );
}
