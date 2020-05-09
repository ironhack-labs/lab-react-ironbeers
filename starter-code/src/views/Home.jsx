import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <div>
          <NavLink className="link" exact to="/all-beers">
            <img className="main-image" src="/images/beers.png" alt="" />
            <h1 className="home-menu">See All the Beers !</h1>
            <p className="home-text">
              Check out our fine selection of beers from around the world. We
              have a beer for averyone here ! You like it blond, brown, ruby ?
              Something more original ? We have it ! So don't waste your time
              reading this stuff and go on that page !
            </p>
          </NavLink>
        </div>
        <div>
          <NavLink className="link" exact to="/random-beer">
            <img className="main-image" src="/images/random-beer.png" alt="" />
            <h1 className="home-menu"> Random Beer</h1>
            <p className="home-text">
              Click on the link and see what mysterious beer awaits you ! 100%
              of our cient recommand checking this page out if you want to be
              amaized.
            </p>
          </NavLink>
        </div>
        <div>
          <NavLink className="link" exact to="/new-beer">
            <img className="main-image" src="/images/new-beer.png" alt="" />
            <h1 className="home-menu"> New Beer</h1>
            <p className="home-text">
              Creating your own beer has always been a dream of yours right ?
              This page is made for you ! Here you can go crazy and create any
              beer you want. That's what dreams are made of.
            </p>
          </NavLink>
        </div>
      </div>
    );
  }
}
