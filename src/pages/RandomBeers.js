import axios from "axios";
import React, { useEffect, useState } from "react";

const Random = () => {
  const [beer, setBeer] = useState({});
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setBeer(response.data))
      .then((res) => {
        console.log(beer);
      });
  }, []);

  return (
    <div>
      <div className="col-sm-4">
        <>
          <div className="card" style={{ width: "20rem", height: "30rem" }}>
            <img
              src={beer.image_url}
              className="card-img-top crdImg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{beer.name}</h5>
              <h5 className="card-body">{beer.tagline}</h5>
              <p>Created By: {beer.contributed_by}</p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Random;