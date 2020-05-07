import React from "react";
import Card from "../../ui/card/Card";


const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="/images/beers.png" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/beers" className="btn btn-primary">
                  All Beers
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="/images/random-beer.png" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Random Beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/beers" className="btn btn-primary">
                  Check a Random Beer
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="/images/new-beer.png" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">New Beer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/beers" className="btn btn-primary">
                  Create a Beer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
