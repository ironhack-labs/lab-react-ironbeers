import React from "react";

const Cards = ({image, name, tagline, contributed_by}) => {
  return (
    <div className="card mb-3" style={{maxWidth: '300px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img style={{width:'50px', margin:'25px'}} src={image} className="card-img" alt={`img${name}`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
                {tagline}
            </p>
            <p className="card-text">
              <small className="text-muted">Created by: {contributed_by}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
