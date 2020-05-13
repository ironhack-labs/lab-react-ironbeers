import React from "react";
// import NavBar from "./views/NavBar"

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <NavBar/> */}
      <container>
        <a href="/beers">
          <img src="/images/beers.png" alt=""></img>
          <h2>All Beers</h2>
          <p>Lorem</p>
        </a>
      </container>
      <container>
        <a href="/random-beer">
          <img src="/images/random-beer.png" alt=""></img>
          <h2>Random Beer</h2>
          <p>Lorem</p>
        </a>
      </container>
      <container>
        <a href="/new-beer">
          <img src="/images/new-beer.png" alt=""></img>
          <h2>New Beer</h2>
          <p>Lorem</p>
        </a>
      </container>
    </div>
  );
};

export default Home;
