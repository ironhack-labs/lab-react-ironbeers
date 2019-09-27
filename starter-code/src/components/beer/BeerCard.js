import React from "react";

export default function BeerCard({beerSingle}) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-32x32">
            <img
              src={beerSingle.image_url} alt="beer"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{beerSingle.name}</p>
              <p className="has-text-grey">{beerSingle.tagline}</p>
            </div>
          </div>

          <div className="content">{beerSingle.description}
          </div>
          <div className="content">{beerSingle.first_brewed}
          </div>
          <div className="content">{beerSingle.attenuation_level}
          </div>
          <div className="content">{beerSingle.contributed_by}
          </div>
        </div>
      </div>
    </div>
  );
}
