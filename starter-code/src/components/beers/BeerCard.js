import React from 'react'
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css';

const BeerCard = (beers) => {
  const{image, name, tagline, contributed} = beers
  console.log(beers);
  
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={name}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{tagline}</p>
              <p className="subtitle is-6">Created by: {contributed}</p>
            </div>
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur fringilla fringilla. Sed sapien tellus, molestie eget purus id, placerat malesuada erat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerCard;
