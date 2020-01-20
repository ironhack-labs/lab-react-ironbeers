import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Link to="/beers" style={{ textDecoration: "none" }}>
          <div className="homesegment row">
            <div className="homeimages col-sm-6">
              <img src="/images/beers.png" alt="" />
            </div>
            <div className="hometext col-sm-6">
              <div className="pagedescriptions">
                <h2>ALL BEERS</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque nostrum ea quasi rem fuga cupiditate quidem dolorum
                  illum iste deserunt incidunt, distinctio officia eius mollitia
                  nulla corrupti, nesciunt, voluptatum temporibus.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/random-beer" style={{ textDecoration: "none" }}>
          <div className="homesegment row">
            <div className="homeimages col-sm-6">
              <img src="/images/random-beer.png" alt="" />
            </div>
            <div className="hometext col-sm-6">
              <div className="pagedescriptions">
                <h2>RANDOM BEERS</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque nostrum ea quasi rem fuga cupiditate quidem dolorum
                  illum iste deserunt incidunt, distinctio officia eius mollitia
                  nulla corrupti, nesciunt, voluptatum temporibus.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/new-beer" style={{ textDecoration: "none" }}>
          <div className="homesegment row">
            <div className="homeimages col-sm-6">
              <img src="/images/new-beer.png" alt="" />
            </div>
            <div className="hometext col-sm-6">
              <div className="pagedescriptions">
                <h2>NEW BEER</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque nostrum ea quasi rem fuga cupiditate quidem dolorum
                  illum iste deserunt incidunt, distinctio officia eius mollitia
                  nulla corrupti, nesciunt, voluptatum temporibus.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
