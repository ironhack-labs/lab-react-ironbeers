import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Home = () => {
  return (
      <div className="home">
      <h1 className="wlcm">Welcome to IronBeers!</h1>
        <div className="home-wrapper">
        <section className="section">
            <div className="container">
                <img className="beer-img" src="./images/beer_img1.jpg"/>
                <Link to="/beers"><h1 className="intro-title"> See All Beers</h1></Link>
                    <h2 className="subtitle">
                    See a detailed list of all the beers available.  
                    </h2>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <img className="beer-img" src="./images/beer_img2.jpg"/>
                <Link to="/random-beer"><h1 className="intro-title"> Random Beer</h1></Link>
                    <h2 className="subtitle">
                    Navigate to the details of a randomly selected beer.
                    </h2>
                </div>
        </section>

        <section className="section">
            <div className="container">
                <img className="beer-img" src="./images/beer_img3.jpg"/>
                <Link to="/new-beer"><h1 className="intro-title"> Add New Beer</h1></Link>
                    <h2 className="subtitle">
                        Use our form to add a new beer.
                    </h2>
                </div>
        </section>
    </div>
    </div>
  );
};

export default Home;