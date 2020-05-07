import React, { Component } from "react";
import Card from "../../ui/card/Card"

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: "",
    };
  }
  render() {
    const beerList = this.props.beersApi;
    return (
      <div className="container">
        <div className="row">
          {beerList.map((elm, idx) => (
            <Card key={idx} {...elm} />
          ))}
        </div>
      </div>
    );
  }
}
export default Beers;
