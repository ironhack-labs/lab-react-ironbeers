import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    console.log("as");
    return (
      <>
        <h1>¡Bienvenido a IronBeer's</h1>
        <p>Una noche en el Oportiño de Lunes a Domingo</p>
        <Link to="/beers">
          <img src="../images/beers.png" />
          <h2>All Beers</h2>
        </Link>
        < Link to = "/beers/random" >
          <img src="../images/random-beer.png" />
          <h2>Random Beer</h2>
        </Link>
        <Link to="/beers/new">
          <img src="../images/new-beer.png" />
          <h2>New Beer</h2>
        </Link>
      </>
    );
  }
}

export default Index;
