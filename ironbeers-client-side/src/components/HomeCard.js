import React, { Component } from "react";



class HomeCard extends Component {
  render() {
    return (
      <div>

        <div className="card" style={{ width: "30%", margin: "10px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.image} alt="Placeholder " />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <p className="title is-4">{this.props.title}</p>
            </div>

            <div className="content">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
