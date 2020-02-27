import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./SingleBeer.css";

class SingleBeer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="SingleBeer">
        <Link to="/">Home</Link>
        <div key={this.props.beer._id} className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.beer.image_url} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.beer.name}</p>
                <p className="title is-4">{this.props.beer.contributed_by}</p>
              </div>
            </div>
            <div className="content">{this.props.beer.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
