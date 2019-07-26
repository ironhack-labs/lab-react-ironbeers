import React, { Component } from "react";
import "./randombeer.css";

class RandomBeer extends Component {
  render() {
    let randomNumber = Math.floor(Math.random() * this.props.beerList.length);
    let pickedBeer = this.props.beerList[randomNumber];

    if (this.props.ready) {
      return (
        <div className="card m-3 p-1" key={pickedBeer._id}>
          <img className="card-img-top my-img" src={pickedBeer.image_url} />
          <div className="card-body">
            <div className="card-text">
              <h2>{pickedBeer.name}</h2>
              <h6>{pickedBeer.tagline}</h6>
              <p>{pickedBeer.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading ... </h2>;
    }
  }
}

export default RandomBeer;
