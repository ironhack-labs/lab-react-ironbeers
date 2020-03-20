import React from "react";

export const ItemList = ({ children }) => {
  return (
    <div className="ItemList">
      <div className="wrapper-img">
        <img src={children.image_url} className="card-img" alt="Beer Image" />
      </div>
      <div className="wrapper-info">
        <div className="card-body">
          <h5 className="card-title">{children.name}</h5>
          <p className="card-text tagline">{children.tagline}</p>
          <p className="card-text">
            <small className="text-muted">
              Creted by: {children.contributed_by}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
