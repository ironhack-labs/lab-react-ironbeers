import React from 'react';
import { Link } from "react-router-dom";

function Home () {
return (
    <>
    <h1>Home</h1>

    <section className="home-page">
        <div className="beers">
          <img src="/beers.png" alt="craft station img" />
        </div>
        <div className="beers-text">
          <Link activeStyle={{color: "red"}} to="/beers">All Beers</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>


      <section className="home-page">
        <div className="beers">
          <img src="/random-beer.png" alt="craft close-up" />
        </div>
        <div className="beers-text">
        <Link activeStyle={{color: "red"}} to="/random-beers">Random Beers</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>



      <section className="home-page">
        <div className="beers">
          <img src="/new-beer.png" alt="beer-bottle"/>
        </div>
        <div className="beers-text">
        <Link activeStyle={{color: "red"}} to="/new-beer">New Beer</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>


   
    
    
    <div className="randombeer"></div>
    <div className="newbeer"></div>

    </>
)
}

export default Home;