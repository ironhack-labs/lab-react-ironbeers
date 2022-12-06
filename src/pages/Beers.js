import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Beer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setData(response.data))
      .then((res) => {
        console.log(data);
      });
  }, []);
  //
  return (
    <div class="container">
      <div className="row g-3">
        {data &&
          data.map((beer) => (
            <div className="col-sm-4">
              <Link to={`/beers/${beer._id}`}>
                <div
                  className="card"
                  style={{ width: "20rem", height: "30rem" }}
                >
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
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Beer;