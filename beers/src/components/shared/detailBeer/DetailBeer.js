import React from 'react';

const DetailBeer = ({name, image_url, attenuation_level, tagline, first_brewed, description, contributed_by }) => {
  
    return (
      <main className="container">
        <article className="row d-flex align-items-center pt-5">
          <div className="col-lg-4 detail">
            <img src={image_url} alt={name} />
          </div>
          <div className="col-lg-8 mt-3">
            <h3 className="d-flex justify-content-between ">
              <span>{name}</span>{' '}
              <span style={{ color: '#555555' }}>
                {attenuation_level}
              </span>
            </h3>
            <h6 className="d-flex justify-content-between">
              <span style={{ color: '#555555' }}>{tagline}</span>{' '}
              <span style={{ fontWeight: 800 }}>{first_brewed}</span>
            </h6>
            <p>{description}</p>
            <p className="text-right font-weight-bold">
              {contributed_by}
            </p>
          </div>
        </article>
      </main>
    );
  }

export default DetailBeer;
