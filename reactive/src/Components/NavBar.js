import React, { Component } from "react";
import { Link} from "react-router-dom";

export default class NavBar extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  render() {
    return (
      <Link to={"/home"}>
        <nav class="navbar is-link" role="navigation" aria-label="main navigation">
  <h1 style={{color:"White" ,margin:"0 auto",fontSize:"2em"}}>
   Home
  </h1>
</nav>
</Link>  
    );
  }
}
