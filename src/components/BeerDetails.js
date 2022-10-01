import Header from "./Header";

import axios from "axios";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BeerDetails() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => {
        console.log(res.data);
        setBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />

      {beer ? (
        <div className="beer-details-container">
          <div className="card-body">
            <img src={beer.image_url} style={{ height: "300px" }}></img>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0",
              }}
            >
              <div style={{ textAlign: "left", marginRight: "20px" }}>
                <h4>{beer.name}</h4>
                <h6 style={{ color: "gray" }}>{beer.tagline}</h6>
              </div>
              <div style={{ textAlign: "right", marginLeft: "20px" }}>
                <h4 style={{ color: "gray" }}>{beer.attenuation_level}</h4>
                <h6>{beer.first_brewed}</h6>
              </div>
            </div>
            <p style={{ width: "40%", margin: "0 auto" }}>{beer.description}</p>
            <p style={{ marginTop: "20px", color: "gray" }}>
              {beer.contributed_by}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
