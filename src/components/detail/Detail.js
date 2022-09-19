import React from "react";

function Detail({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) {
  return (
    <div className="card">
      <div className="d-flex justify-content-center mt-3">
        <img src={image_url} className="card-img-top" alt={name} style={{width:"8rem"}}/>
      </div>
      <div className="card-body mx-5">
        <div className="d-flex justify-content-between">
          <h4>{first_brewed}</h4>
          <h4>{attenuation_level}</h4>
        </div>
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{tagline}</h6>
        <p className="card-text">
          {description}
        </p>
        <h6 className="card-subtitle mb-2 text-muted">{contributed_by}</h6>
      </div>
    </div>
  );
}

export default Detail;
