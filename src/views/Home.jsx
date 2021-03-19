import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import barImage from './../assets/beers.png';
import randomImage from './../assets/random-beer.png';
import newImage from './../assets/new-beer.png';



export default class home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="image-container">
            <img src={barImage} alt="Bar" />
          </div>
          <h1>
            <Link to="/beers">All Beers</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            mollitia cupiditate ullam, eius quo dicta qui sunt dolore odio
            facere consectetur! Ab error vero nam. Delectus quasi quae aliquam
            ducimus!
          </p>
        </div>
        <div className="section">
          <div className="image-container">
            <img src={randomImage} alt="Beer dispenser" />
          </div>
          <h1>
            <Link to="/random-beer">Random Beer</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            mollitia cupiditate ullam, eius quo dicta qui sunt dolore odio
            facere consectetur! Ab error vero nam. Delectus quasi quae aliquam
            ducimus!
          </p>
        </div>
        <div className="section">
          <div className="image-container">
            <img src={newImage} alt="Pinte" />
          </div>
          <h1>
            <Link to="/new-beer">New Beer</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            mollitia cupiditate ullam, eius quo dicta qui sunt dolore odio
            facere consectetur! Ab error vero nam. Delectus quasi quae aliquam
            ducimus!
          </p>
        </div>
      </div>
    );
  }
}
