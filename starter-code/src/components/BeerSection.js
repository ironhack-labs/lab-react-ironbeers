import React, { Component } from 'react';

const BeerSection = (props) => {

    return (
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by1">
              <img src={props.image} alt={props.title}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <a className="title is-4" href={props.link}>{props.title}</a>
              </div>
            </div>

            <div className="content">
              {props.description}
            </div>
          </div>
        </div>
    )
}

export default BeerSection