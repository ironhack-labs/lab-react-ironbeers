import React from 'react';
import "./beer.css";

const Beer = ({
  image,
  name,
  tagline,
  contributed_by
}) => (
    <section className="mt-5">
      <div className="row">
        <div className="col-3 d-flex justify-content-center">
          <img className="img-fluid img-beer" src={image} alt={image} />
        </div>
        <div className="col-9">
          <h5>{name}</h5>
          <p>{tagline}</p>
          <p>{contributed_by}</p>
        </div>
      </div>
    </section>
  )
  ;


export default Beer;


