import { Link } from "react-router-dom";
import beersImgSource from "../assets/beers.png";
import randomBeerImgSource from "../assets/random-beer.png";
import newBeerImgSource from "../assets/new-beer.png";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <h1 style={{ color: "teal" }}>Iron Beers</h1>
        <Link to="/beers">
          <p>All beers</p>
          <img src={beersImgSource} alt="" />
        </Link>
        <Link to="/random-beer">
          {" "}
          <p>Random Beer</p>
          <img src={randomBeerImgSource} alt="" />
        </Link>
        <Link to="/new-beer">
          <p>New Beer</p>
          <img src={newBeerImgSource} alt="" />
        </Link>
      </div>
    </>
  );
}

export default HomePage;
