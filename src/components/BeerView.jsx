import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RandomBeer extends Component {

  render() {
    return (
      <div>
        <div>
            <div>
              <img src={this.props.img} alt={this.props.name} />
              <h1>{this.props.name}</h1>
              <span>{this.props.tagline}</span>
              <br />
              <div>{this.props.first_brewed}</div>
              <div>{this.props.attenuation_level}</div>
              <p>{this.props.description}</p>
              <small>{this.props.contributed_by}</small>
            </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
