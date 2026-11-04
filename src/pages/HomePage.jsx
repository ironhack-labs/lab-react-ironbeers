import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {

  // The home page showing the links to the 3 main pages of the app. You can leave this as it is.
  return (
    <>
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4"
      >
        <Link to="/beers">
          <div className="card mb-2" style={{ width: "26rem" }}>
            <img src={beersImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">All Beers</h3>
              <p className="card-text">
              Explore a collection of beers crafted by various brewers and breweries.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="card mb-2" style={{ width: "26rem" }}>
            <img src={randomBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Random Beer</h3>
              <p className="card-text">
              Discover unique beers with intriguing details at random, one beer at a time.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="card" style={{ width: "26rem" }}>
            <img src={newBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">New Beer</h3>
              <p className="card-text">
              Unleash your inner brewmaster and share your latest creation with the brewing community.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;