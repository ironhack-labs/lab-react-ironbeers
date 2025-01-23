import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";

function HomePage() {
  // The home page showing the links to the 3 main pages of the app. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
        <Link to="/breweries">
          <div className="card mb-2" style={{ width: "26rem" }}>
            <img src={beersImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">All Breweries</h3>
              <p className="card-text">
                Explore a collection of breweries crafted by various brewers.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/random-brewery">
          <div className="card mb-2" style={{ width: "26rem" }}>
            <img src={randomBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Random Brewery</h3>
              <p className="card-text">
                Discover unique brewery with intriguing details at random, one
                brewery at a time.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
