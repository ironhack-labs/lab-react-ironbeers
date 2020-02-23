import React from "react";

class Randombeer extends React.Component {
  render() {
    console.log("randombeers.js RENDER: ", this.props);
    //let randomBeerNumber = Math.floor(Math.random() * this.props.randombeers);

    return (
      <div>
        <div className="card">
          <img
            className="cards-img-top"
            src={this.props.image_url}
            alt="Card  1"
          />
          <div className="card-body">
            <h5 className="card-title">Beer Name: {this.props.name}</h5>
            <p className="card-text">{this.props.descrition}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Randombeer;
