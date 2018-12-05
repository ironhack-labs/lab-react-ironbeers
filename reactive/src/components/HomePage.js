import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return(
      <section>
        <h2>Welcome to the alcoholics website, you're exactly where you should be 😉</h2>

        <Link to="/beers" />
        <Link to="/random-beers" />
        <Link to="/new-beer" />
      </section>
    )
  }
}

export default HomePage;