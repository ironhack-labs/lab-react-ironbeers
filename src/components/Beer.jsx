import React from 'react';
import { Link } from 'react-router-dom';

export default function Beer({
  image_url,
  name,
  tagline,
  description,
  attenuation_level,
  first_brewed,
  contributed_by,
  _id,
  list,
}) {
  console.log(list);
  return (
    <>
      {!list ? (        
          <div className="__cont">
            <div className="__card-R __m-2 __jc-center">
              <img src={image_url} alt="beer" className="__h-5x" />
              <div className="__w-5x">
                <div className="__flex __jc-between __fw-w">
                  <h1>{name}</h1>
                  <h1 className="__c-l">{attenuation_level}</h1>
                </div>
                <div className="__flex __jc-between __fw-w">
                  <h3 className="__c-l">{tagline}</h3>
                  <h3>{first_brewed}</h3>
                </div>
                <p>{description}</p>
                <i className="__c-l">{contributed_by}</i>
              </div>
            </div>
          </div>
      ) : (
        <Link to={`/beer/${_id}`}>
          <div className="__card-R __m-2">
            <img src={image_url} alt="beer" className="__h-4x" />
            <div>
              <h1 className="__c-w">{name}</h1>
              <h4>{tagline}</h4>
              <p>{contributed_by}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
