import React from "react";
import { Link } from "react-router-dom" 

export default class BeerItem extends React.Component {
  render() {
    return (
      <Link to={this.props._id}>
        <div className="beer-item card" style={{ marginBottom: "24px" }}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure>
                  <img src={this.props.image_url} alt={this.props.name} />
                </figure>
              </div>
              <div className="media-content">
                <h2 className="title">{this.props.name}</h2>
                <p className="subtitle"> {this.props.tagline}</p>
                <p>Created by {this.props.contributed_by}</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
