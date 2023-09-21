import React from "react";
import newBeerImg from "../assets/new-beer.png"
import randomBeerImg from "../assets/random-beer.png"
import beersImg from "../assets/beers.png"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <Link to={'/beers'} className="link">
            <div className="card mb-3" style={{width: "18rem"}}>
              <img
                src={beersImg}
                className="card-img-top"
                alt="Beer"
              />
              <div className="card-body">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non tincidunt enim. Maecenas aliquet dui non tempor gravida.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Ut eget eros libero. Vestibulum at massa nibh. In congue ac
                  massa at pellentesque. Ut maximus justo id mauris venenatis
                  tristique.
                </p>
              </div>
            </div>
          </Link>
          <Link to={'/random-beer'} className="link">
            <div className="card mb-3" style={{width: "18rem"}}>
              <img
                src={randomBeerImg}
                className="card-img-top"
                alt="Beer"
              />
              <div className="card-body">
                <h5 className="card-title">Random Beer</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non tincidunt enim. Maecenas aliquet dui non tempor gravida.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Ut eget eros libero. Vestibulum at massa nibh. In congue ac
                  massa at pellentesque. Ut maximus justo id mauris venenatis
                  tristique.
                </p>
              </div>
            </div>
          </Link>
          <Link to={'/new-beer'} className="link">
            <div className="card mb-3" style={{width: "18rem"}}>
              <img
                src={newBeerImg}
                className="card-img-top"
                alt="Beer"
              />
              <div className="card-body">
                <h5 className="card-title">New Beer</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non tincidunt enim. Maecenas aliquet dui non tempor gravida.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Ut eget eros libero. Vestibulum at massa nibh. In congue ac
                  massa at pellentesque. Ut maximus justo id mauris venenatis
                  tristique.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
