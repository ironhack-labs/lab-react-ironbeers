import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { image, title, text } = this.props.beers;

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{text}</div>
        </div>
      </div>
    );
  }
}