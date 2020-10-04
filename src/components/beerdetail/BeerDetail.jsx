import React from 'react';
import './BeerDetail.css';

class BeerDetail extends React.Component {
  render() {
    return (
      <div className="detail-container">
        <div className="detail">
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
      </div>
    );
  }
}

export default BeerDetail;
