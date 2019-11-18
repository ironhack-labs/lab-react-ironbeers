import React from "react";

export default class TheBeer extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.theBeer.data.name}</h2>
        {this.props.theBeer.data.description} <br />
        <img src={this.props.theBeer.data.image_url} />
      </div>
    );
  }
}
