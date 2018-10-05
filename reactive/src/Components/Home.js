import React, { Component } from "react";
import { Link} from "react-router-dom";

export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
 
  render() {
    return (
      <div>
        <h1>HOLA</h1>
        <Link to={"/beers"}><h2>All Beers</h2></Link>
        <Link to={"/random-beer"}><h2>Random Beer</h2></Link>
        <Link to={"/new-beer"}><h2>New Beer</h2></Link>
      </div>
    );
  }
}
