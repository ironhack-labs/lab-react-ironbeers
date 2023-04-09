import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";



function HomePage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-md-6 my-3">
          <img
            src={beers}
            alt="beers"
            className="img-fluid rounded"
          />
          <Link to={"/beers"} className="btn btn-primary mt-3 d-block">
            List Of Beers
          </Link>
        </div>
        <div className="col-md-6 my-3">
          <img
            src={randombeer}
            alt="random"
            className="img-fluid rounded"
          />
          <Link to={"/random"} className="btn btn-primary mt-3 d-block">
            Random Beer
          </Link>
        </div>
      </div>

      <div className="row justify-content-center align-items-center my-5">
        <div className="col-md-6 my-3">
          <img
            src={newbeer}
            alt="new"
            className="img-fluid rounded"
          />
          <Link to={"/create-beer"} className="btn btn-primary mt-3 d-block">
            New Beer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
