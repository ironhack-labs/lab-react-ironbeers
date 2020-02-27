import React from "react";
import "./oneBeer.css";

export default class OneBeer extends React.Component {
  render() {
    return (
      <div className="onebeer">
        <img src={this.props.image_url} alt="" />
        <div>
          <h2>{this.props.name}</h2>
          <h4>{this.props.tagLine}</h4>
          <h5>Created by: {this.props.contributed_by}</h5>
        </div>
      </div>
    );
  }
}
