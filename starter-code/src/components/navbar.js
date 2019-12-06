import React, { Component } from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/beer-list">
        Beers
      </a>
      <br></br>
      <a class="navbar-brand" href="/beers/randomBeer">
        Random Beer
      </a>
      <br></br>
      <a class="navbar-brand" href="/newBeers">
        New Beer
      </a>
      <br></br>
      <a class="navbar-brand" href="/">
        Home
      </a>
    </nav>
  );
};

export default Navbar;
