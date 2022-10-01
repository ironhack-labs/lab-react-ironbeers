import { Link } from "react-router-dom";

import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row my-3">
        <div className="col-md-4">
          <div className="card">
            <img src={beersImg} alt="beers" />
            <div className="card-body mx-1">
              <h5 className="card-title">
                <Link
                  to="/beers"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  All Beers
                </Link>
              </h5>
              <p className="card-text text-start">
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={randomBeerImg} alt="beers" />
            <div className="card-body mx-1">
              <h5 className="card-title">
                <Link
                  to="/random-beer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Random Beer
                </Link>
              </h5>
              <p className="card-text text-start">
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={newBeerImg} alt="beers" />
            <div className="card-body mx-1">
              <h5 className="card-title">
                <Link
                  to="/new-beer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  New Beer
                </Link>
              </h5>
              <p className="card-text text-start">
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
