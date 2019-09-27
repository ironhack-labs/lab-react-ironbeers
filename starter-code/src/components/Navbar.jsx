import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

export default class Navbar extends Component {
  render() {
    return (
      <Link to="/">
        <Image
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          fluid
        />
      </Link>
    );
  }
}
