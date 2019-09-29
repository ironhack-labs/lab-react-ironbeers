import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeSection extends Component {
  render() {
    return (
      <div className="container">
        <Link to={this.props.content.link}>
          <img
            src={this.props.content.img}
            width="100%"
            height="auto"
            alt="counter with beers"
          />
          <h1>{this.props.content.title}</h1>
        </Link>
        <div className="flex-line">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            voluptatum minima accusamus architecto, mollitia quos similique
            blanditiis voluptate iste earum?
          </p>
        </div>
      </div>
    );
  }
}

export default HomeSection;
