import React from "react";
import { Link } from "react-router-dom";

export default class TheBeer extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.theBeer.data.name}</h2>
        {this.props.theBeer.data.description} <br />
        <img src={this.props.theBeer.data.image_url} />
        <br />
        <br />
        <Link to="/">
          <button className="btn btn-warning">Home</button>
        </Link>
      </div>
    );
  }
}
