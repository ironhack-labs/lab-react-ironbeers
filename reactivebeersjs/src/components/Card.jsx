import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    return (
      <Link className="linktext" to={`/beers/${this.props.data._id}`}>
        <div className="card">
          <img className="cardImg" src={this.props.data.image_url} alt="beer" />
          <div>
            <h3>{this.props.data.name}</h3>
            <h4>{this.props.data.tagline}</h4>
            <p>{this.props.data.contributed_by}</p>
          </div>
          <div />
        </div>
        <hr />
      </Link>
    );
  }
}

export default Card;
