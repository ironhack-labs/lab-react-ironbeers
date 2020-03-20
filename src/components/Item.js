import React from "react";

export const Item = ({ item }) => (
  <div className="Item">
    <div className="wrapper-img">
      <img src={item.image_url} className="card-img-top" alt="..." />
    </div>

    <div className="card-body">
      <div className="wrapper-info">
        <h3 className="card-title">{item.name}</h3>
        <h3>{item.attenuation_level}</h3>
      </div>
      <div className="wrapper-info">
        <p className="blockquote-footer">{item.tagline}</p>
        <p>
          <strong>{item.first_brewed}</strong>
        </p>
      </div>

      <p className="card-text">{item.description}</p>
      <p>
        <strong>{item.contributed_by}</strong>
      </p>
    </div>
  </div>
);
