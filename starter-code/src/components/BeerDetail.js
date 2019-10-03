import React, { Component } from "react";
// import Header from "./Header";

export default class BeerDetail extends Component {
  // componentDidMount() {
  //   axios.get("http://localhost:5000/single/:id").then(response => {
  //     this.setState({ beers: response.data });
  //   });
  // }
  render() {
    return (
      <div>
        {/* <Header />
        <img src="./images/beers.png" alt="" />
        <h1>All Beers</h1>
        <div className="beer">
          <div className="beer-img">
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div className="beer-dscrp">
            <h1>{this.props.name}</h1>
            <h2>{this.props.tagline}</h2>
            <p>Contributed by: {this.props.contributed_by}</p>
          </div>
        </div> */}
      </div>
    );
  }
}
