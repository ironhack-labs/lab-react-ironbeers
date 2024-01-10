import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <>
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}
      >
        <Link to="/beers">
          <div className="card" style={{ width: "18rem" }}>
            <img src={beersImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">All Beers</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pellentesque interdum metus non venenatis. Nulla facilisi.
                Mauris tristique neque sit amet velit placerat scelerisque.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="card" style={{ width: "18rem" }}>
            <img src={randomBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Random Beer</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pellentesque interdum metus non venenatis. Nulla facilisi.
                Mauris tristique neque sit amet velit placerat scelerisque.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="card" style={{ width: "18rem" }}>
            <img src={newBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">New Beer</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pellentesque interdum metus non venenatis. Nulla facilisi.
                Mauris tristique neque sit amet velit placerat scelerisque.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;