import React from "react";

export const AllBeers = (props) => {
  return (
    <div className="card" style={{ width: "80%" }}>
      <div
        className="card-body"
        style={{ display: "flex", flexDirection: "row", margin: "40px 10px" }}
      >
        <img
          style={{ width: 60, height: 200 }}
          src={props.beer.image_url}
          alt={props.beer.image_url}
        />

        <div
          style={{ marginLeft: 60, width: 400, height: 200, textAlign: "left" }}
        >
          <div>
            <h1 style={{ fontWeight: "inherit" }}>{props.beer.name}</h1>
            <div>
              <p style={{ color: "#9F9F9F", fontSize: 25, fontWeight: "500" }}>
                {props.beer.tagline}
              </p>
              <p>
                <strong>Created by</strong> {props.beer.contributed_by}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
