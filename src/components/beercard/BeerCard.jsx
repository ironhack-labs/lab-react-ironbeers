import React from 'react';
import { NavLink } from 'react-router-dom';
import './BeerCard.css';
class BeerCard extends React.Component {
  render() {
    return (
      <NavLink className="navlink" to={`/beers/${this.props.beer._id}`}>
        <div className="card">
          <div className="name">{this.props.beer.name}</div>
          <img className="image" src={this.props.beer.image_url}></img>
          <div className="description">{this.props.beer.tagline}</div>
          <div className="creator">
            <span className="creator-one">Created by:</span>
            <span className="creator-two">
              {this.props.beer.contributed_by}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default BeerCard;
