import React, { Component } from 'react';

export class CardBeer extends Component {
  render() {
    return (
      <div className="align-self-center" style={{ display: 'inline-block' }}>
        <div className="card" style={{ width: '18rem' }}>
          <img
            className="card-img-top probando"
            src={this.props.image_url}
            alt="Beers"
          />

          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default CardBeer;
