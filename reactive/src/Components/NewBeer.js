import React, { Component } from "react";
import { Link} from "react-router-dom";
import 'bulma/css/bulma.css'
import NavBar from "./NavBar";

export default class NewBeer extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Link to={"/random-beer"}><h2>Random Beer</h2></Link>
        <Link to={"/beers"}><h2>All Beers</h2></Link>
      </div>
    );
  }
}
