import React from 'react';
import { Link } from 'react-router-dom';

export default function IronCard({imgCard, imgTitle, altCard, txtCard, cardLink}) {
  return (
    <>
          <Link to={cardLink} className="card">
              <div className="card-image">
                  <figure className="image is-2by1">
                      <img src={imgCard} alt={altCard} />
                  </figure>
              </div>
              <div className="card-content">
                  <p className="title is-3">{imgTitle}</p>
                  <div className="content">
                      {txtCard}
                  </div>
              </div>
          </Link>
    </>
  );
}