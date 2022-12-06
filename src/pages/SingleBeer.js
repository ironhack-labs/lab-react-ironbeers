import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => setBeer(response.data))
      .then((res) => {});
  });

  return (
    <div>
      <div className="col-sm-4">
        <div className="card" style={{ width: "20rem", height: "30rem" }}>
          <img src={beer.image_url} className="card-img-top crdImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>
            <h5 className="card-body">{beer.tagline}</h5>
            <p>Created By: {beer.contributed_by}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBeer;