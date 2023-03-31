import React from "react";

export const BeerItem = ({ image_url, name, tagline, contributed_by }) => {
  return (
    <div
      className="d-flex align-items-center m-3"
      style={{ borderBottom: "1px gray solid", padding: "10px" }}
    >
      <img
        src={image_url}
        style={{ height: "120px", marginRight: "20px" }}
        alt="beer pic"
      />
      <div>
        <h2 style={{ fontWeight: "normal" }}>{name}</h2>
        <h5
          style={{ fontWeight: "lighter" }}
          className="text-secondary font-weight-light"
        >
          {tagline}
        </h5>
        <p>
          <small>
            <strong>Created by:</strong> {contributed_by}
          </small>
        </p>
      </div>
    </div>
  );
};
