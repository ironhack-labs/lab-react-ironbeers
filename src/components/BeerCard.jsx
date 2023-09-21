import React from "react";

function BeerCard({ beer }) {
  
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card mb-3 d-flex flex-row gx-3 align-items-start" style={{ width: "18rem" }}>
        <img src={beer.image_url} className="card-img-top" alt="Beer" style={{height: "80px"}}/>
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">
            {beer.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
