import React from "react";
import { Link } from "react-router-dom";

const Beer = ({ beerinfo }) => {
  return (
    <div
      className="row align-items-center"
      style={{
        marginBottom: "50px",
        borderBottom: "1px solid black",
        paddingBottom: "25px"
      }}
    >
      <div className="col-3">
        <img src={beerinfo.image_url} alt="nada realmenta" height="250px" />
      </div>
      <div className="col">
        <h2>
          <Link to={`/beers/${beerinfo._id}`}>{beerinfo.name}</Link>
        </h2>
        <h4>{beerinfo.tagline}</h4>
        <p>
          <strong>Created by:</strong>
          {beerinfo.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default Beer;
