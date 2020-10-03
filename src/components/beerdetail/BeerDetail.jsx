import React from 'react';
import './BeerDetail.css';

class BeerDetail extends React.Component {
  render() {
    return (
      <div className="detail">
        <div className="name">Mahou</div>
        <img className="image" src="https://picsum.photos/400"></img>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </div>
        <div className="creator">
          <span className="creator-one">Created by</span>
          <span className="creator-two">Pepe Perez</span>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
