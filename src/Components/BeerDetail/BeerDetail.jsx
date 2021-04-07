import React from 'react';
import { Link } from 'react-router-dom';
import './BeerDetail.css';

const Beerdetail = (props) => {
  const { image_url, description, name, tagline, contributed_by } = props;
  return (
    <div className="cardBeer">
      <Link to={`/`}>
        <div className="">
          <div className="imgBeer">
            <img src={image_url} className="card-img" alt="beer" />
          </div>

          <div className="">
            <div className="">
              <h5 className="">{name}</h5>
              <p className="">{tagline}</p>
              <p className="">
                <small className="text-muted">
                  <strong>Created by:</strong> {contributed_by}
                </small>
              </p>

              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Beerdetail;
