import React from 'react';


const CardItem = (props) => (

      <div className="container">
        <div className="card" key={props.beer._id}>
            <div className="card-image">
              <img src={props.beer.image_url} alt={props.beer.name} className="image_card"/>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                <h3>{props.beer.name}</h3>
                <h5>{props.beer.tagline}</h5>
                <h6><strong>Created by: </strong>{props.beer.name}</h6>
                </div>
                <div className="media-content">
                  <p className="title is-4">{props.beer.tagline}</p>
                  <p className="subtitle is-6">{props.beer.brewers_tips}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

)

export default CardItem

