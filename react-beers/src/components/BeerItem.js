import React from 'react';

const BeerItem = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.image_url} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            {/* <figure className="image is-48x48">
              <img src={props.image_url} alt="Placeholder image" />
            </figure> */}
          </div>
          <div className="media-content">
            <p className="title is-4">{props.name}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        </div>
      </div>
    </div>
  );
}

export default BeerItem;