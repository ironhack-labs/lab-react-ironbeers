import React from "react";
// import "./oneBeer.scss";

export default class OneBeer extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <img src={this.props.image_url} alt="" />
        <h2>{this.props.name}</h2>
        <h4>{this.props.tagLine}</h4>
        <h5>Created by: {this.props.contributed_by}</h5>
      </div>
    );
  }
}
